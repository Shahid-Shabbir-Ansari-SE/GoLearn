import express from 'express'
import User from '../models/user.model'
import { genSalt } from 'bcrypt'
import { userType } from '../types/user.type'
import { Request, Response, NextFunction } from 'express'
import passport from 'passport'
import generatedToken from '../middlwares/genToken.middleware'

const router = express.Router()
const saltRounds = 10
const salt = genSalt(saltRounds)

router.post(
  '/register',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new User(req.body)
      const existingUser = await User.findOne({ email: user.email })
      if (existingUser) {
        return res.status(400).send({ message: 'Email already exists' })
      }
      user.salt = await salt
      await user.save()
      // check cookies and find token if not exist then gen token
      if (!req.cookies.null){
        res.clearCookie('token')
        generatedToken(req, res, next, user)
        res.status(201).send(user)
      }
      else {
        generatedToken(req, res, next, user)
        res.status(201).send(user)
      }
    } catch (error) {
      res.status(400).send(error)
    }
  }
)

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    'local',
    { session: false },
    (err: Error, user: userType | false, info: { message?: string }) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.json({ message: info.message || 'Authentication failed' })
      }
      if (!req.cookies.null) {
        res.clearCookie('token')
        generatedToken(req, res, next, user)
        res.status(201).send(user)
      } else {
        generatedToken(req, res, next, user)
        res.status(201).send(user)
      }
    }
  )(req, res, next)
})

export default router

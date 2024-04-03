/* ------------ Import Packages & Setup Passport -=----------- */
import { Request, Response } from 'express'
import passport from 'passport'
import { Strategy as JwtStrategy, VerifiedCallback } from 'passport-jwt'
import { JwtPayload } from 'jsonwebtoken'
import { userType } from '../types/user.type'
import User from '../models/user.model'
import dotenv from 'dotenv'

dotenv.config()

/* ---------------- Extract token from cookie ---------------- */
const cookieExtractor = (req: Request): string | null => {
  return req.header('Authorization') || null
}

/* --------------------- Verify JWT Token -------------------- */
passport.use(
  new JwtStrategy(
    { jwtFromRequest: cookieExtractor, secretOrKey: process.env.TOKEN_SECRET! },
    async (payload: JwtPayload, done: VerifiedCallback) => {
      try {
        const user = await User.find({ email: payload.id })
        if (!user) return done(null, false)
        done(null, user)
      } catch (error) {
        done(error, false)
      }
    }
  )
)

/* - Authenticate User: Checks and responds based on JWT token - */
const authenticateUser = (req: Request, res: Response) => {
  const token = req.header('Authorization')
  if (!token)
    return res.status(401).json({ message: 'Login or Register Again' })

  passport.authenticate(
    'jwt',
    { session: false },
    (err: Error, user: userType) => {
      if (err) return res.status(500).json({ message: 'Internal Server Error' })
      if (!user) return res.status(401).json({ message: 'User Not Registered' })
      res.json({ message: 'Access granted!', user })
    }
  )(req, res)
}

export { authenticateUser }

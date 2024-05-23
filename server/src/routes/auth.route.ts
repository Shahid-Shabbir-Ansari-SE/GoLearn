import express from 'express'
import User from '@models/user.model'
import { genSalt } from 'bcrypt'
import { userType } from '@interfaces/user.interface'
import { Request, Response, NextFunction } from 'express'
import passport from 'passport'
import generatedToken from '@middlewares/genToken.middleware'
import { authenticateUser } from '@middlewares/verifyToken.middleware'

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
				return res.status(200).send({ message: 'Email already exists' })
			}
			user.salt = await salt
			await user.save()
			// check cookies and find token if not exist then gen token
			res.clearCookie('token')
			generatedToken(req, res, next, user.toObject() as userType)
			res.status(201).send({ message: 'User registered successfully', user })
		} catch (error) {
			console.log(error)
			res.status(500).send(error)
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

router.put('/role', async (req: Request, res: Response) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!user) {
			return res.status(400).send({ message: 'User not found' })
		}
		user.role = req.body.role
		await user.save()
		res.send(user)
	} catch (error) {
		res.status
	}
})

router.get('/logout', (req: Request, res: Response) => {
	res.clearCookie('token')
	res.status(200).send({ message: 'Logged out successfully' })
})

router.put('/field', async (req: Request, res: Response) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!user) {
			return res.status(400).send({ message: 'User not found' })
		}
		user.fieldInterested = req.body.fieldInterested
		await user.save()
		res.send(user)
	} catch (error) {
		res.status
	}
})

router.get('/verify-token', authenticateUser, (req: Request, res: Response) => {
	res.json({ message: 'Token is valid', user: req.user })
})

export default router

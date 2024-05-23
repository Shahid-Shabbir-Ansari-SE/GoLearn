/* ----------------- Import Packages ----------------- */
import Jwt from 'jsonwebtoken'
import { userType } from '@interfaces/user.interface'
import { Request, Response, NextFunction } from 'express'

/* ------------------ Generate Token Function */
const generatedToken = (
  req: Request,
  res: Response,
  next: NextFunction,
  user: userType
) => {
  try {
    const token = Jwt.sign({ id: user.email }, process.env.TOKEN_SECRET!)
    console.log('token', token)
    res.cookie('token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      domain: 'localhost',
      path: '/'
    })

    // next()
  } catch (error) {
    next(error)
  }
}

export default generatedToken

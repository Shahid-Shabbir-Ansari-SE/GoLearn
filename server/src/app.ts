import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './configs/db.config'
import { Request, Response } from 'express'
import auth from './routes/auth.route'
import passport from 'passport'
import './configs/passport.config'
import cookieParser from 'cookie-parser'
import course from './routes/course.route'
import instructor from './routes/instructor.route'

dotenv.config()

const app = express()
app.use(cookieParser())
app.use(express.json())
const port = process.env.PORT
app.use(passport.initialize())

connectDB()

app.use('/api/auth', auth)
app.use('/api/course', course)
app.use('/api/instructor', instructor)

app.get('/', (_req: Request, res: Response) => {
  res.send('App is running!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

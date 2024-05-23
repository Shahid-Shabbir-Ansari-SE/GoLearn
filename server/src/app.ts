import 'module-alias/register'
import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import '@configs/passport.config'
import { connectDB } from '@configs/db.config'
import passport from 'passport'
import cors from 'cors'

dotenv.config()
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

const app = express()
app.use(cors(corsOptions))
import auth from '@routes/auth.route'
import course from '@routes/course.route'
import instructor from '@routes/instructor.route'
import category from '@routes/category.route'
import wishlist from '@routes/wishlist.route'
app.use(express.json())
const port = process.env.PORT
app.use(passport.initialize())

connectDB()

app.use('/api/auth', auth)
app.use('/api/course', course)
app.use('/api/instructor', instructor)
app.use('/api/category', category)
app.use('/api/wishlist', wishlist)

app.get('/', (_req: Request, res: Response) => {
  res.send('App is running!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

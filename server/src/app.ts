import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './configs/db.config'
import { Request, Response } from 'express'

dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT

connectDB()

app.get('/', (_req: Request, res: Response) => {
  res.send('App is running!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

import mongoose from 'mongoose'
import { hash } from 'bcrypt'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  fieldInterested: {
    type: [String]
  }
})

userSchema.pre('save', async function (next) {
  const hashedPassword = await hash(
    this.password + process.env.PEPPER,
    this.salt
  )
  this.password = hashedPassword
  next()
})

const User = mongoose.model('User', userSchema)
export default User

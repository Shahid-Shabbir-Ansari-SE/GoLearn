import mongoose from 'mongoose'
import { hash } from 'bcrypt'
import { UserEnrollment, Course } from '@interfaces/enrollment.interface'

const courseSchema = new mongoose.Schema<Course>(
  {
    courseId: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false } // No need for individual _id fields for subdocuments
)

const enrollmentSchema = new mongoose.Schema<UserEnrollment>(
  {
    userId: {
      type: String,
      required: true
    },
    courses: {
      type: [courseSchema],
      required: true
    }
  },
  { timestamps: true }
)

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
  },
  enrollments: {
    type: [enrollmentSchema],
    default: []
  }
})

userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const saltRounds = 10
    this.password = await hash(this.password + process.env.PEPPER, saltRounds)
  }
  next()
})

const User = mongoose.model('User', userSchema)
export default User

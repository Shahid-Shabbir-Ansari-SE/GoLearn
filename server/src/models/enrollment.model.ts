import mongoose from 'mongoose'
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

export default mongoose.model('Enrollment', enrollmentSchema)

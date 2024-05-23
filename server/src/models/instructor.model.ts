import mongoose from 'mongoose'
import { instructorModel } from '@interfaces/instructor.interface'

const instructorSchema = new mongoose.Schema<instructorModel>({
  instructorImageURL: {
    type: String,
    required: true
  },
  instructorName: {
    type: String,
    required: true
  },
  instructorPosition: {
    type: String,
    required: true
  },
  instructorAbout: {
    type: String,
    required: true
  },
  courses: [
    {
      type: String,
      unique: true
    }
  ]
})

const Instructor = mongoose.model('Instructor', instructorSchema)

export default Instructor

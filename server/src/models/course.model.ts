import mongoose from 'mongoose'
import { CourseModel } from '../types/course.type'

const courseSchema = new mongoose.Schema<CourseModel>({
  mainImageURL: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  courseTime: {
    type: {
      courseWeeks: {
        type: Number,
        required: true
      },
      courseHour: {
        type: Number,
        required: true
      }
    },
    required: true
  },
  courseContent: {
    type: {
      courseAbout: {
        type: String,
        required: true
      },
      courseInstructorID: {
        type: String
      },
      courseSyllabus: {
        type: String,
        required: true
      },
      courseLearning: {
        type: [String],
        required: true
      },
      courseVideo: {
        type: [String],
        required: true
      }
    },
    required: true
  },
  coursePrice: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  enrolledPeople: {
    type: Number,
    required: true
  }
})

const Course = mongoose.model<CourseModel>('Course', courseSchema)
export default Course

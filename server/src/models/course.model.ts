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
  courseLevel: {
    type: String,
    required: true
  },
  courseLanguage: {
    type: String,
    required: true
  },
  enrolledPeople: {
    type: Number,
    required: true
  },
  courseCategory: {
    type: String,
    required: true
  },
  courseComments: {
    type: [
      {
        comment: {
          type: String,
          required: true
        },
        commentOwnerId: {
          type: String,
          required: true
        },
        commmentRating: {
          type: Number,
          required: true
        }
      }
    ]
  }
})

const Course = mongoose.model<CourseModel>('Course', courseSchema)
export default Course

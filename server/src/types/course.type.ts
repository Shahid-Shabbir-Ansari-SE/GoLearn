import mongoose from 'mongoose'

interface CourseTime {
  courseWeeks: number
  courseHour: number
}

interface CourseContent {
  courseAbout: string
  courseInstructorID: string
  courseSyllabus: string
  courseLearning: string[]
  courseVideo: string[]
}

export interface CourseModel extends mongoose.Document {
  mainImageURL: string
  title: string
  description?: string
  courseTime: CourseTime
  courseContent: CourseContent
  coursePrice: string
  startDate: Date
  enrolledPeople: number
}

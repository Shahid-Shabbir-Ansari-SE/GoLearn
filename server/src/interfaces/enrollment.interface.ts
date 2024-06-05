export interface UserEnrollment {
  userId: string
  courses: Course[]
  createdAt: Date
  updatedAt: Date
}

export interface Course {
  courseId: string
  createdAt: Date
  updatedAt: Date
}

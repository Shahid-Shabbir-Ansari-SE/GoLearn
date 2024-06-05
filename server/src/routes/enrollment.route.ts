import { Request, Response, Router } from 'express'
import User from '@models/user.model'

const router = Router()

router.post(
  '/create_or_update_enrollment/userId=:userId/courseId=:courseId',
  async (req: Request, res: Response) => {
    try {
      const { userId, courseId } = req.params

      const user = await User.findById(userId)
      if (!user) {
        return res.status(404).send('User not found')
      }

      const now = new Date()
      const existingEnrollment = user.enrollments.find(
        (enrollment) => enrollment.userId === userId
      )

      if (!existingEnrollment) {
        user.enrollments.push({
          userId,
          courses: [{ courseId, createdAt: now, updatedAt: now }],
          createdAt: now,
          updatedAt: now
        })
        await user.save()
        return res.status(200).send('Enrollment successful')
      } else {
        const existingCourse = existingEnrollment.courses.find(
          (course) => course.courseId === courseId
        )
        if (existingCourse) {
          return res.status(400).send('User is already enrolled in this course')
        } else {
          existingEnrollment.courses.push({
            courseId,
            createdAt: now,
            updatedAt: now
          })
          existingEnrollment.updatedAt = now
          await user.save()
          return res.status(200).send('Enrollment successful')
        }
      }
    } catch (error) {
      res.status(500).send({
        error: 'Failed to create or update enrollment',
        details: error
      })
    }
  }
)

router.delete(
  '/delete_course/userId=:userId/courseId=:courseId',
  async (req: Request, res: Response) => {
    try {
      const user = await User.findById(req.params.userId)
      if (!user) {
        return res.status(404).send('User not found')
      }

      const enrollment = user.enrollments.find(
        (enrollment) => enrollment.userId === req.params.userId
      )
      if (enrollment) {
        enrollment.courses = enrollment.courses.filter(
          (course) => course.courseId !== req.params.courseId
        )
        await user.save()
      }

      res.status(200).send(user.enrollments)
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete course', details: error })
    }
  }
)

export default router

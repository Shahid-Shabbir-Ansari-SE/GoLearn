import { Request, Response, Router } from 'express'
import Course from '../models/course.model'
import { CourseModel } from '../types/course.type'

const router = Router()

// Create a new course
router.post('/create_course', async (req: Request, res: Response) => {
  try {
    const courseData: CourseModel = req.body
    const course = new Course(courseData)
    await course.save()
    res.status(201).send(course)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Get Courses By Instructor
router.get(
  '/courses_by_instructor/:instructorID',
  async (req: Request, res: Response) => {
    try {
      const courses = await Course.find({
        'courseContent.courseInstructorID': req.params.instructorID
      })
      res.status(200).send(courses)
    } catch (error) {
      res.status(500).send(error)
    }
  }
)

// Get All Courses
router.get('/all_courses', async (req: Request, res: Response) => {
  try {
    const courses = await Course.find()
    res.status(200).send(courses)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Get Course By ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      // If no course is found, return a 404 Not Found status
      return res.status(404).send('Course not found')
    }
    res.status(200).send(course)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/search/:query', async (req: Request, res: Response) => {
  try {
    const courses = await Course.find({
      title: { $regex: req.params.query, $options: 'i' }
    })
    res.status(200).send(courses)
  } catch (error) {
    res.status(500).send
  }
})



export default router

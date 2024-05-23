import { Request, Response, Router } from 'express'
import Category from '@models/category.model'
import { CategoryModel } from '@interfaces/category.interface'
import Course from '@models/course.model'

const router = Router()

router.post('/create_category', async (req: Request, res: Response) => {
  try {
    const categoryData: CategoryModel = req.body
    const category = new Category(categoryData)
    await category.save()
    res.status(201).send(category)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/all_categories', async (req: Request, res: Response) => {
  try {
    const categories = await Category.find()
    res.status(200).send(categories)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/courses/:id', async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id)
      .populate('courses')
      .exec()
    if (!category) {
      return res.status(404).send('Category not found')
    }
    res.status(200).send(category.courses)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.patch('/add_course/:id', async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id
    const { courseID } = req.body

    const category = await Category.findById(categoryId)
    if (!category) {
      return res.status(404).send('Category not exist')
    }

    // Check if the course already exists in the category
    if (category.courses && category.courses.includes(courseID)) {
      return res.status(400).send('Course already exists in the category')
    }

    // Check if the course exists
    const course = await Course.findById(courseID)
    if (!course) {
      return res.status(404).send('Course not exist')
    }

    // Add course to category
    category.courses = category.courses
      ? [...category.courses, courseID]
      : [courseID]
    await category.save()

    res.status(200).send(category)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/search_course/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { courseName } = req.query

    if (typeof courseName !== 'string') {
      return res
        .status(400)
        .send('Course name is required and should be a string')
    }

    const category = await Category.findById(id)
    if (!category) {
      return res.status(404).send('Category not found')
    }

    const courseIds = category.courses

    const courses = await Course.find({
      _id: { $in: courseIds },
      title: new RegExp(courseName, 'i')
    })

    res.status(200).send(courses)
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router

import express from 'express'
import Instructor from '../models/instructor.model'
import { instructorModel } from '../types/instructor.types'

const router = express.Router()

// Create a new instructor
router.post('/create_instructor', async (req, res) => {
  try {
    const instructorData: instructorModel = req.body
    const instructor = new Instructor(instructorData)
    await instructor.save()
    res.status(201).send(instructor)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Get all instructors
router.get('/all_instructors', async (req, res) => {
  try {
    const instructors = await Instructor.find()
    res.status(200).send(instructors)
  } catch (error) {
    res.status(500).send(error)
  }
})

// Get instructor by Position
router.get('/instructor_by_position/:position', async (req, res) => {
  try {
    const instructor = await Instructor.find({
      instructorPosition: req.params.position
    })
    res.status(200).send(instructor)
  } catch (error) {
    res.status(500).send(error)
  }
})

// add courses to existing instructor
router.put('/add_courses/:id', async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      {
        $push: { courses: req.body.courses }
      },
      { new: true }
    )
    res.status(200).send(instructor)
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router

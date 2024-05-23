import express from 'express'
import wishlistModel from '@models/wishlist.model'

const router = express.Router()

router.post('/add_course_to_wishlist', async (req, res) => {
  try {
    const { userId, courseId }: { userId: string; courseId: string } = req.body

    // Find the wishlist by user ID
    let wishlist = await wishlistModel.findOne({ userId })

    if (!wishlist) {
      // If no wishlist exists for the user, create a new one
      wishlist = new wishlistModel({ userId, courses: [courseId] })
      await wishlist.save()
      return res.status(201).send(wishlist)
    }

    // Check if the course already exists in the wishlist
    if (wishlist.courses.includes(courseId)) {
      return res.status(200).send({ message: 'Course already in wishlist' })
    }

    // Add the course to the wishlist
    wishlist.courses.push(courseId)
    await wishlist.save()

    res.status(200).send(wishlist)
  } catch (error) {
    res.status(400).send({ error })
  }
})
export default router

import mongoose from 'mongoose'
import { CategoryModel } from '@interfaces/category.interface'

const categorySchema = new mongoose.Schema<CategoryModel>({
  name: {
    type: String,
    required: true
  },
  courses: {
    type: [String],
    required: true
  },
  parentCategory: {
    type: String
  }
})

export default mongoose.model('Category', categorySchema)

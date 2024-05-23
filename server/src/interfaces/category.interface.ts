import mongoose from 'mongoose'

export interface CategoryModel {
  _id: string
  name: string
  courses: mongoose.Types.ObjectId[]
  parentCategory: string | null
}

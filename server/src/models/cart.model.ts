import mongoose from 'mongoose'
import { CartModel } from '@interfaces/cart.interface'

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }
    ]
  },
  { timestamps: true }
)

const cartModel = mongoose.model<CartModel & mongoose.Document>(
  'Cart',
  cartSchema
)

export default cartModel

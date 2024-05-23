import mongoose from 'mongoose'
import { WishlistModel } from '@interfaces/wishlist.interface'

const wishlistSchema = new mongoose.Schema(
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

const wishlistModel = mongoose.model<WishlistModel & mongoose.Document>(
  'Wishlist',
  wishlistSchema
)

export default wishlistModel

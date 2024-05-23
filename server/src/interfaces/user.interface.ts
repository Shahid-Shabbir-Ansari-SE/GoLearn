import { WishlistModel } from './wishlist.interface'
import { CartModel } from './cart.interface'

export interface userType {
  toObject(): userType
  toObject(): userType
  name: string
  email: string
  phoneNumber: string
  password: string
  salt: string
  role?: string | null
  fieldInterested?: string[] | null
  wishlist?: WishlistModel[] | null
  cart?: CartModel | null
  createdAt: Date
  updatedAt: Date
}

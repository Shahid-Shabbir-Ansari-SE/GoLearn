import axios from 'axios'
import { verifyToken } from './verifyToken'

export const fieldInterested = async (selectedFields: string[]) => {
  try {
    const data = await verifyToken()
    const email = await data[0].email
    const res = await axios.put('http://localhost:6060/api/auth/field', {
      email,
      fieldInterested: selectedFields
    })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

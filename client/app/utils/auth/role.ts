import axios from 'axios'
import { verifyToken } from './verifyToken'

export const setRole = async (role: string) => {
  const data = await verifyToken()
  console.log(data)
  const email = await data[0].email
  console.log(email)
  const res = await axios.put('http://localhost:6060/api/auth/role', {
    email,
    role
  })
  console.log(res.data)
  return res.data
}

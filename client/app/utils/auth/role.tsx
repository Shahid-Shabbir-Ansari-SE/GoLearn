import axios from 'axios'
import { userRole } from '~/types/auth'

export const setRole = async (role: userRole) => {
  const res = await axios.post(`${process.env.Server_URL}/api/auth/role`, role)
  return res.data
}

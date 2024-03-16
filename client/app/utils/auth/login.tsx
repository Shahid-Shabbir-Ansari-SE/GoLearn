import { userLogin } from '~/types/auth'
import axios from 'axios'

export const login = async (user: userLogin) => {
  const res = await axios.post('http://localhost:6060/api/auth/login', user)
  return res.data
}
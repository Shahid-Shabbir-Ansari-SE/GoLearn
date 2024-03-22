import { userLogin } from '~/types/auth'
import axios from 'axios'

export const login = async (user: userLogin) => {
  const res = await axios.post('http://localhost:6060/api/auth/login', user, {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

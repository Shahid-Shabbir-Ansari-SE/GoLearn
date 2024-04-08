import { userLogin } from '~/types/auth'
import axios from 'axios'

export async function login(user: userLogin) {
  try {
    const res = await axios.post('http://localhost:6060/api/auth/login', user, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  } catch (error) {
    // Handle error
    console.error('Login failed:', error)
    throw error
  }
}

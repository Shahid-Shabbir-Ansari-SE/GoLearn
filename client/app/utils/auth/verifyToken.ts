import axios from 'axios'
import Cookies from 'js-cookie'

export const verifyToken = async () => {
  const token = Cookies.get('token')
  if (!token) return { message: 'Unauthorized' }
  try {
    const res = await axios.get('http://localhost:6060/api/auth/verify-token', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    if (res.data.message === 'Access granted!') {
      return res.data.user
    } else {
      return { message: 'Login Again' }
    }
  } catch (error) {
    console.error(error)
  }
}

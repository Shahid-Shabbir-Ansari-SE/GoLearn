import axios from 'axios'

export const getCourseById = async (courseId: string) => {
  try {
    const res = await axios.get(`http://localhost:6060/api/course/${courseId}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    return error
  }
}

export default getCourseById

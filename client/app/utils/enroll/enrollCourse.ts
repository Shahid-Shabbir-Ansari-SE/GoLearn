import axios from 'axios'

export default async function enrollCourse(userId: string, courseId: string) {
  try {
    const res = await axios.post(
      `http://localhost:6060/api/enrollment/create_or_update_enrollment/userId=${userId}/courseId=${courseId}`
    )
    return res.data
  } catch (error) {
    return error
  }
}

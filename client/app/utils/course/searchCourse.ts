import axios from 'axios'

export const searchCourse = async (searchTerm: string) => {
  try {
    const response = await axios.get(
      `http://localhost:6060/api/course/search/${searchTerm}`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

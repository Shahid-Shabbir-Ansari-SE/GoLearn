import axios from 'axios'

export async function searchTermInCategory(
  searchTerm: string,
  categoryId: string
) {
  try {
    console.log('Searching for', searchTerm, 'in category', categoryId)
    const response = await axios.get(
      `http://localhost:6060/api/category/search_course/${categoryId}?courseName=${searchTerm}`
    )
    console.log('Response from API2:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

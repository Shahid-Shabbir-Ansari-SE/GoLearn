import axios from 'axios'

export async function getCategories() {
  try {
    const response = await axios.get(
      'http://localhost:6060/api/category/all_categories'
    )
    console.log('Response from API:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error // Re-throw the error to handle it in the calling code
  }
}

import axios from 'axios';

export const addToWishlist = async (userId: string,courseId: string) => {
  try {
    const response = await axios.post('http://localhost:6060/api/wishlist/add_course_to_wishlist', { userId, courseId });
    return response.data;
  } catch (error) {
    return error;
  }
};
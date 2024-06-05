import React from 'react'
import { Link, useLocation } from '@remix-run/react'
import { searchCourse } from '~/utils/course/searchCourse'
import { getCategories } from '~/utils/category/getCategories'
import { Category } from '~/types/category'
import { searchTermInCategory } from '~/utils/category/searchTermInCategory'

interface Course {
  courseContent: {
    courseVideo: {
      length: number
      videoURL: string[]
    }
  }
  _id: string
  title: string
  mainImageURL: string
  startDate: string
  courseTime: {
    courseWeeks: number
  }
}

export default function SearchRoute() {
  const location = useLocation()
  const pathParts = location.pathname.split('/search/')
  const searchTerm = pathParts.length > 1 ? pathParts[1] : ''
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  )

  const [searchResults, setSearchResults] = React.useState<Course[]>([])
  const [categories, setCategories] = React.useState<Category[]>([])

  React.useEffect(() => {
    const handleResults = async () => {
      try {
        setSearchResults(await searchCourse(searchTerm))
        if (searchResults.length > 0) {
          alert('No results found')
        }
      } catch (error) {
        alert('Error fetching search results:', error)
      }
    }
    handleResults()
  }, [searchTerm])

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories()
        setCategories(categoriesData)
        console.log('Categories:', categories)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    console.log('Fetching categories...')
    fetchCategories()
  }, [])

  const handleCategorySearch = async (categoryId: string) => {
    try {
      const searchResults = await searchTermInCategory(searchTerm, categoryId)
      setSearchResults(searchResults)
      setActiveCategory(categoryId)
    } catch (error) {
      console.error('Error searching in category:', error)
    }
  }
  return (
    <div className='space-y-[33px]'>
      <div className='flex justify-between px-[60px]'>
        <div></div>
        <div></div>
      </div>
      <div className='flex gap-5 px-14'>
        <div className='w-1/4 space-y-3'>
          <div className='rounded-[10px] border'>
            <h1 className='flex h-[50px] items-center px-5 font-interSemiBold'>
              All Careers
            </h1>
            <hr />
            <ul>
              {categories.map((category, index) => (
                <li
                  key={category._id}
                  className={`flex h-[40px] w-full items-center ${
                    activeCategory === category._id
                      ? 'bg-primary text-white'
                      : ''
                  } /* if
                  index is last one */ w-full text-left
                  ${index === categories.length - 1 ? 'rounded-b-[10px]' : ''}
                  `}
                >
                  <button
                    className='w-full px-5 text-left'
                    onClick={() => handleCategorySearch(category._id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex w-full flex-wrap gap-[30px] xl:col-span-3'>
          {searchResults.length > 0 ? (
            searchResults.map((course) => (
              <Link
                to={`/course/${course._id}`}
                key={course._id}
                className='flex w-[31%] flex-col gap-[10px] rounded-[22px] border bg-white p-[7px]'
              >
                <div>
                  <img
                    src={course.mainImageURL}
                    className='rounded-[16px]'
                    alt={course.title}
                  />
                </div>
                <div className='space-y-1 px-1'>
                  <div className='flex justify-between'>
                    <h1 className='w-1/2'>{course.title}</h1>
                    <p>{course.courseTime.courseWeeks} weeks</p>
                  </div>
                  <div className='flex gap-2 text-sm'>
                    <p>
                      {course.courseContent.courseVideo.length}
                      {course.courseContent.courseVideo.length > 1
                        ? ' videos'
                        : ' video'}
                    </p>
                    <p>{new Date(course.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
                {/* <hr className='-ml-[7px] w-[calc(100%+15px)] pb-10' /> */}
              </Link>
            ))
          ) : (
            <div>No results found</div>
          )}
        </div>
      </div>
    </div>
  )
}

import { userEnrolledCourse } from '~/state/store'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import getCourseById from '~/utils/course/getById'
import React from 'react'
import { Link } from '@remix-run/react'

interface Course {
  _id: string
  title: string
  description: string
  mainImageURL: string
  coursePrice: string
  courseTime: {
    courseWeeks: number
    courseHour: number
  }
  startDate: string
  courseContent: {
    courseAbout: string
    courseInstructorID: string
    courseSyllabus: string
    courseLearning: string[]
    courseVideo: string[]
  }
}

export default function Route() {
  const [enrolledCourses] = useAtom(userEnrolledCourse)
  const [courseIds, setCourseIds] = useState<string[]>([])
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (enrolledCourses && enrolledCourses.length > 0) {
      const ids = enrolledCourses.flatMap((enrollment) =>
        enrollment.courses.map((course) => course.courseId)
      )
      setCourseIds(ids)
    }
  }, [enrolledCourses])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await Promise.all(
          courseIds.map(async (courseId) => {
            const course = await getCourseById(courseId)
            return course
          })
        )
        setCourses(fetchedCourses)
      } catch (error) {
        console.error('Error fetching course details:', error)
      } finally {
        setLoading(false)
      }
    }

    if (courseIds.length > 0) {
      fetchCourses()
    } else {
      setLoading(false)
    }
  }, [courseIds])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='absolute left-[75px] top-[81px] w-full lg:top-[59px]'>
      {courses.length > 0 ? (
        <div className='flex flex-wrap gap-4 p-4'>
          {courses.map((course) => (
            <Link
              key={course._id}
              to={`/course/${course._id}`}
              className='w-1/4 rounded-lg bg-white shadow-md'
            >
              <div
                key={course._id}
                className='flex w-80 flex-col rounded border p-4 shadow-lg'
              >
                <img
                  src={course.mainImageURL}
                  alt={course.title}
                  className='h-40 w-full rounded-t object-cover'
                />
                <h2 className='mt-2 text-xl font-bold'>{course.title}</h2>
                <p className='text-gray-600'>{course.description}</p>
                <p className='mt-2 text-gray-800'>
                  <strong>Price:</strong> ${course.coursePrice}
                </p>
                <p className='mt-2 text-gray-800'>
                  <strong>Duration:</strong> {course.courseTime.courseWeeks}{' '}
                  weeks ({course.courseTime.courseHour} hours)
                </p>
                <p className='mt-2 text-gray-800'>
                  <strong>Start Date:</strong>{' '}
                  {new Date(course.startDate).toLocaleDateString()}
                </p>
                <div className='mt-4'>
                  <h3 className='font-bold'>About the Course</h3>
                  <p>{course.courseContent.courseAbout}</p>
                </div>
                <div className='mt-4'>
                  <h3 className='font-bold'>Instructor ID</h3>
                  <p>{course.courseContent.courseInstructorID}</p>
                </div>
                <div className='mt-4'>
                  <h3 className='font-bold'>Syllabus</h3>
                  <p>{course.courseContent.courseSyllabus}</p>
                </div>
                <div className='mt-4'>
                  <h3 className='font-bold'>What You'll Learn</h3>
                  <ul className='list-inside list-disc'>
                    {course.courseContent.courseLearning.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className='mt-4'>
                  <h3 className='font-bold'>Course Videos</h3>
                  <ul className='list-inside list-disc'>
                    {course.courseContent.courseVideo.map((video, index) => (
                      <li key={index}>{video}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <React.Fragment>
          <p>No enrollments found.</p>
          <br />
          <div className='flex items-center gap-1'>
            <p>Enroll a course</p>
            <Link
              className='rounded-lg border border-gray-500 bg-primary px-4 py-2 font-arialBold text-white'
              to='/'
            >
              Enroll
            </Link>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

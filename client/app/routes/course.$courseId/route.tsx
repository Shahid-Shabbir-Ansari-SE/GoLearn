import React from 'react'
import { getCourseById } from '~/utils/course/getById'
import { useLocation } from '@remix-run/react'
import enrollCourse from '~/utils/enroll/enrollCourse'
import { verifyToken } from '~/utils/auth/verifyToken'

interface Course {
  title: string
  courseLevel: string
  courseContent: {
    courseAbout: string
    courseVideo: Array<string>
  }
  courseTime: {
    courseHour: number
    courseWeeks: number
  }
  mainImageURL: string
  enrolledPeople: number
  courseLanguage: string
}

interface CourseEnrollment {
  courseId: string
  createdAt: string // You might want to use Date type if possible
  updatedAt: string // You might want to use Date type if possible
}

interface User {
  _id: string
  name: string
  email: string
  phoneNumber: string
  password: string
  fieldInterested: string[] // Assuming field interests are strings
  enrollments: CourseEnrollment[]
  salt: string
  __v: number
}

interface VerifyTokenResponse {
  message: string
  user: User[]
}

export default function Course() {
  const [loading, setLoading] = React.useState(false)
  const [course, setCourse] = React.useState<Course>()
  const location = useLocation()
  const pathParts = location.pathname.split('/course/')
  const courseId = pathParts.length > 1 ? pathParts[1] : ''
  const [enrollMessage, setEnrollMessage] = React.useState<string>('')
  const [userId, setUserId] = React.useState<string>('')
  const [checkEnrolled, setCheckEnrolled] = React.useState<boolean>(false)
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0)

  const handleNextVideo = () => {
    course &&
      setCurrentVideoIndex(
        (prevIndex: number) =>
          (prevIndex + 1) % course?.courseContent.courseVideo.length
      )
  }

  const handlePrevVideo = () => {
    course &&
      setCurrentVideoIndex(
        (prevIndex: number) =>
          (prevIndex - 1 + course?.courseContent.courseVideo.length) %
          course?.courseContent.courseVideo.length
      )
  }
  const handleEnrollCourse = async () => {
    try {
      getUserId()
      const response = await enrollCourse(userId, courseId)
      setEnrollMessage(response.response.data)
      setTimeout(() => {
        setEnrollMessage('')
      }, 1000)
    } catch (error) {
      console.error('Failed to enroll course:', error)
    }
  }

  // check user is enrolled
  const checkEnrollment = async () => {
    try {
      const response: VerifyTokenResponse = await verifyToken()
      const enrollments: CourseEnrollment[] = response.user[0].enrollments

      // Check if any enrollment's courses match the provided courseId
      const isEnrolled: boolean = enrollments.some((enrollment) => {
        return enrollment.courses.some((course) => course.courseId === courseId)
      })

      // Update state based on enrollment status
      setCheckEnrolled(isEnrolled)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserId = async () => {
    try {
      const response = await verifyToken()
      setUserId(response.user[0]._id)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await getCourseById(courseId)
        setCourse(response)
        setLoading(false)
        console.log(response)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCourse()
  }, [courseId])

  return (
    <div>
      <div className=' flex w-full justify-between gap-40 bg-primary px-20 py-20'>
        <div className='w-1/2 py-3 text-white'>
          <div className='grid gap-5'>
            <h1 className='px-[5px] font-arialRegular text-3xl'>
              {course?.title}
            </h1>
            <p className='px-[5px]'>{course?.courseContent.courseAbout}</p>
            <div>
              <div className='flex w-full justify-between'>
                <div className='flex w-full gap-1'>
                  <img src='\svg\videos.svg' alt='' />
                  <p>
                    {course?.courseContent.courseVideo?.length ?? 0}
                    {course?.courseContent.courseVideo?.length ?? 0 > 1
                      ? ' Videos'
                      : ' Video'}
                  </p>
                </div>
                <div className='flex w-full items-center justify-end gap-1'>
                  <img src='\svg\starFilled.svg' alt='' />
                  <img src='\svg\starFilled.svg' alt='' />
                  <img src='\svg\starFilled.svg' alt='' />
                  <img src='\svg\starFilled.svg' alt='' />
                  <img src='\svg\starEmpty.svg' alt='' />
                  <p>4.7 (122)</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full py-8'>
            <div className='space-y-2'>
              <div className='flex w-full justify-between'>
                <li className='flex gap-2'>
                  <img src='\svg\level.svg' alt='' />
                  <p>Level</p>
                </li>
                <p>{course?.courseLevel}</p>
              </div>
              <div className='flex w-full justify-between'>
                <li className='flex gap-2'>
                  <img src='\svg\enrolled.svg' alt='' />
                  <p>Enrolled</p>
                </li>
                <p>{course?.enrolledPeople}</p>
              </div>
              <div className='flex w-full justify-between'>
                <li className='flex gap-2'>
                  <img src='\svg\duration.svg' alt='' />
                  <p>Duration</p>
                </li>
                <p>
                  {course?.courseTime.courseHour +
                    ' Hours ' +
                    'and ' +
                    course?.courseTime.courseWeeks +
                    ' Weeks'}
                </p>
              </div>
              <div className='flex w-full justify-between'>
                <li className='flex gap-2'>
                  <img src='\svg\certificate.svg' alt='' />
                  <p>Language</p>
                </li>
                <p>{course?.courseLanguage}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid w-1/2 gap-2'>
          <div className='relative'>
            {!loading ? (
              checkEnrolled ? (
                <div>
                  {!course ? (
                    <p>No videos available</p>
                  ) : (
                    course?.courseContent.courseVideo.length > 0 && (
                      <div>
                        <iframe
                          width='100%'
                          height='340px'
                          src={
                            course?.courseContent.courseVideo[currentVideoIndex]
                          }
                          title={`YouTube video ${currentVideoIndex + 1}`}
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        ></iframe>
                        <div className='my-2 flex w-full justify-between px-5'>
                          <button
                            className='border border-primary bg-white px-5 py-1 text-primary'
                            onClick={handlePrevVideo}
                            disabled={currentVideoIndex === 0}
                          >
                            Prev
                          </button>
                          <button
                            className='border border-primary bg-white px-5 py-1 text-primary'
                            onClick={handleNextVideo}
                            disabled={
                              currentVideoIndex ===
                              (course?.courseContent.courseVideo.length || 1) -
                                1
                            }
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div>
                  <img
                    src={course?.mainImageURL}
                    alt=''
                    className='h-[340px] w-full rounded-[10px] object-cover shadow-2xl'
                  />
                  <button onClick={checkEnrollment}>
                    <img
                      src='https://i.ibb.co/BzB9dHx/noun-play-1703078.png'
                      className='absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 object-cover'
                      alt=''
                    />
                  </button>
                </div>
              )
            ) : (
              <div className='flex h-[340px] items-center justify-center rounded-lg border bg-[#dfd3d926]'>
                <div className='absolute size-8 animate-spin rounded-full border-[3px] border-gray-300 border-t-blue-600' />
              </div>
            )}
          </div>
          <div className='flex gap-3'>
            <button
              onClick={handleEnrollCourse}
              className='flex w-full items-center justify-center rounded-[10px] bg-white py-2 font-interSemiBold text-primary'
            >
              <img src='\svg\plus.svg' alt='' />
              Enroll Now
            </button>
            <button className='flex w-full items-center justify-center rounded-[10px] border border-white py-2 font-interSemiBold text-white'>
              <img src='\svg\bookmark.svg' alt='' />
              Whishlist
            </button>
          </div>
          <p>{enrollMessage && enrollMessage}</p>
        </div>
      </div>
      <div className='flex w-full items-center justify-center'>
        <div className='-my-10 flex gap-10 rounded-xl bg-white p-20 py-5 shadow-xl'>
          <button className='flex items-center gap-3'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.5'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2 5.75C2 5.55109 2.07902 5.36032 2.21967 5.21967C2.36032 5.07902 2.55109 5 2.75 5H20.75C20.9489 5 21.1397 5.07902 21.2803 5.21967C21.421 5.36032 21.5 5.55109 21.5 5.75C21.5 5.94891 21.421 6.13968 21.2803 6.28033C21.1397 6.42098 20.9489 6.5 20.75 6.5H2.75C2.55109 6.5 2.36032 6.42098 2.21967 6.28033C2.07902 6.13968 2 5.94891 2 5.75ZM2 9.75C2 9.55109 2.07902 9.36032 2.21967 9.21967C2.36032 9.07902 2.55109 9 2.75 9H20.75C20.9489 9 21.1397 9.07902 21.2803 9.21967C21.421 9.36032 21.5 9.55109 21.5 9.75C21.5 9.94891 21.421 10.1397 21.2803 10.2803C21.1397 10.421 20.9489 10.5 20.75 10.5H2.75C2.55109 10.5 2.36032 10.421 2.21967 10.2803C2.07902 10.1397 2 9.94891 2 9.75ZM2 13.75C2 13.5511 2.07902 13.3603 2.21967 13.2197C2.36032 13.079 2.55109 13 2.75 13H10.75C10.9489 13 11.1397 13.079 11.2803 13.2197C11.421 13.3603 11.5 13.5511 11.5 13.75C11.5 13.9489 11.421 14.1397 11.2803 14.2803C11.1397 14.421 10.9489 14.5 10.75 14.5H2.75C2.55109 14.5 2.36032 14.421 2.21967 14.2803C2.07902 14.1397 2 13.9489 2 13.75ZM2 17.75C2 17.5511 2.07902 17.3603 2.21967 17.2197C2.36032 17.079 2.55109 17 2.75 17H10.75C10.9489 17 11.1397 17.079 11.2803 17.2197C11.421 17.3603 11.5 17.5511 11.5 17.75C11.5 17.9489 11.421 18.1397 11.2803 18.2803C11.1397 18.421 10.9489 18.5 10.75 18.5H2.75C2.55109 18.5 2.36032 18.421 2.21967 18.2803C2.07902 18.1397 2 17.9489 2 17.75Z'
                fill='#623CE7'
              />
              <path
                d='M16.762 14.18C16.8979 14.0635 17.071 13.9995 17.25 13.9995C17.429 13.9995 17.602 14.0635 17.738 14.18L21.238 17.18C21.3128 17.2441 21.3743 17.3223 21.4189 17.4101C21.4636 17.498 21.4905 17.5938 21.4981 17.692C21.5057 17.7903 21.4939 17.889 21.4633 17.9827C21.4328 18.0764 21.384 18.1631 21.32 18.238C21.2559 18.3128 21.1777 18.3743 21.0898 18.419C21.002 18.4636 20.9062 18.4905 20.8079 18.4981C20.7097 18.5057 20.6109 18.4939 20.5172 18.4634C20.4236 18.4328 20.3368 18.3841 20.262 18.32L17.25 15.737L14.238 18.318C14.1638 18.3859 14.0768 18.4382 13.982 18.4718C13.8872 18.5054 13.7867 18.5196 13.6863 18.5135C13.5859 18.5075 13.4878 18.4813 13.3978 18.4366C13.3077 18.3918 13.2276 18.3294 13.1621 18.2531C13.0967 18.1768 13.0472 18.0881 13.0168 17.9923C12.9863 17.8965 12.9754 17.7955 12.9847 17.6954C12.994 17.5953 13.0233 17.4981 13.071 17.4095C13.1186 17.321 13.1836 17.2429 13.262 17.18L16.762 14.18Z'
                fill='#623CE7'
              />
            </svg>
            <p>Description</p>
          </button>
          <button className='flex items-center gap-3'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.00049 5H21.5005V6.5H8.00049V5ZM8.00049 18.5H21.5005V20H8.00049V18.5ZM8.00049 11.75H21.5005V13.25H8.00049V11.75ZM3.50049 11.75H5.00049V13.25H3.50049V11.75ZM3.50049 5H5.00049V6.5H3.50049V5ZM3.50049 18.5H5.00049V20H3.50049V18.5Z'
                fill='black'
              />
            </svg>
            <p>Course Content</p>
          </button>
          <button className='flex items-center gap-3'>
            <svg
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.8865 12.3335C14.7486 11.9435 14.4931 11.6059 14.1554 11.3671C13.8176 11.1282 13.4141 11 13.0005 11V10.5H12.0005V11C11.4701 11 10.9613 11.2107 10.5863 11.5858C10.2112 11.9609 10.0005 12.4696 10.0005 13C10.0005 13.5304 10.2112 14.0391 10.5863 14.4142C10.9613 14.7893 11.4701 15 12.0005 15V17C11.5655 17 11.195 16.7225 11.057 16.3335C11.0365 16.2699 11.0035 16.211 10.9599 16.1603C10.9162 16.1097 10.8629 16.0683 10.803 16.0386C10.7431 16.0089 10.6778 15.9916 10.6111 15.9875C10.5443 15.9835 10.4775 15.9929 10.4144 16.0152C10.3514 16.0375 10.2935 16.0721 10.2441 16.1172C10.1947 16.1622 10.1548 16.2167 10.1269 16.2775C10.0989 16.3382 10.0834 16.4039 10.0813 16.4707C10.0791 16.5376 10.0904 16.6041 10.1145 16.6665C10.2524 17.0565 10.5078 17.3941 10.8456 17.6329C11.1833 17.8718 11.5868 18 12.0005 18V18.5H13.0005V18C13.5309 18 14.0396 17.7893 14.4147 17.4142C14.7898 17.0391 15.0005 16.5304 15.0005 16C15.0005 15.4696 14.7898 14.9609 14.4147 14.5858C14.0396 14.2107 13.5309 14 13.0005 14V12C13.2073 11.9999 13.409 12.064 13.5779 12.1834C13.7468 12.3027 13.8745 12.4715 13.9435 12.6665C13.9876 12.7915 14.0797 12.8939 14.1993 12.9511C14.2586 12.9795 14.3228 12.9958 14.3884 12.9993C14.454 13.0028 14.5196 12.9934 14.5815 12.9715C14.6434 12.9496 14.7004 12.9158 14.7492 12.8719C14.7981 12.828 14.8378 12.7749 14.8661 12.7157C14.8944 12.6564 14.9108 12.5922 14.9143 12.5266C14.9178 12.461 14.9084 12.3954 14.8865 12.3335ZM12.0005 12C11.7353 12 11.4809 12.1054 11.2934 12.2929C11.1058 12.4804 11.0005 12.7348 11.0005 13C11.0005 13.2652 11.1058 13.5196 11.2934 13.7071C11.4809 13.8946 11.7353 14 12.0005 14V12ZM13.0005 17C13.2657 17 13.5201 16.8946 13.7076 16.7071C13.8951 16.5196 14.0005 16.2652 14.0005 16C14.0005 15.7348 13.8951 15.4804 13.7076 15.2929C13.5201 15.1054 13.2657 15 13.0005 15V17Z'
                fill='black'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.07698 4.3105C8.30398 3.71 10.317 3 12.52 3C14.677 3 16.637 3.6805 17.8575 4.273L17.9265 4.3065C18.2945 4.4885 18.5915 4.6605 18.8005 4.8L16.9535 7.5C21.2115 11.853 24.5005 20.9985 12.52 20.9985C0.539478 20.9985 3.73998 12.019 8.03498 7.5L6.19998 4.8C6.34148 4.7075 6.52098 4.6 6.73498 4.486C6.84098 4.429 6.95498 4.37 7.07698 4.3105ZM15.7665 7.464L17.245 5.3025C15.87 5.4015 14.234 5.7245 12.659 6.1805C11.534 6.5055 10.284 6.456 9.12648 6.2425C8.83479 6.18842 8.54511 6.12405 8.25798 6.0495L9.21798 7.463C11.2755 8.1955 13.7085 8.1955 15.7665 7.464ZM8.64048 8.315C11.048 9.245 13.9415 9.245 16.349 8.314C17.3539 9.37335 18.1946 10.5772 18.843 11.8855C19.519 13.2645 19.887 14.643 19.827 15.831C19.769 16.9775 19.318 17.957 18.288 18.685C17.2145 19.4435 15.409 19.9985 12.5195 19.9985C9.62698 19.9985 7.81298 19.453 6.72948 18.703C5.69198 17.984 5.23648 17.018 5.17198 15.887C5.10448 14.712 5.46448 13.3405 6.13798 11.952C6.78048 10.628 7.67698 9.3535 8.64048 8.315ZM8.06548 4.958C8.46548 5.077 8.88348 5.1805 9.30748 5.259C10.3825 5.457 11.4605 5.486 12.3805 5.2195C13.4526 4.90717 14.543 4.66154 15.6455 4.484C14.7255 4.207 13.6495 4 12.5195 4C10.797 4 9.19048 4.4805 8.06548 4.958Z'
                fill='black'
              />
            </svg>
            <p>Pricing</p>
          </button>
          <button className='flex items-center gap-3'>
            <svg
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.5005 6L13.9345 8.77725L17.0005 9.22275L14.7505 11.25L15.5005 14.25L12.5005 12.5625L9.50049 14.25L10.2505 11.25L8.00049 9.22275L11.1505 8.77725L12.5005 6Z'
                fill='black'
              />
              <path
                d='M13.8025 22.5L12.5005 21.75L15.5005 16.5H20.0005C20.1976 16.5003 20.3927 16.4617 20.5749 16.3864C20.757 16.3111 20.9225 16.2007 21.0618 16.0613C21.2012 15.922 21.3116 15.7565 21.3869 15.5744C21.4622 15.3923 21.5008 15.1971 21.5005 15V6C21.5008 5.80293 21.4622 5.60775 21.3869 5.42562C21.3116 5.2435 21.2012 5.07803 21.0618 4.93868C20.9225 4.79933 20.757 4.68885 20.5749 4.61358C20.3927 4.5383 20.1976 4.4997 20.0005 4.5H5.00049C4.80342 4.4997 4.60824 4.5383 4.42611 4.61358C4.24399 4.68885 4.07851 4.79933 3.93917 4.93868C3.79982 5.07803 3.68934 5.2435 3.61407 5.42562C3.53879 5.60775 3.50019 5.80293 3.50049 6V15C3.50019 15.1971 3.53879 15.3923 3.61407 15.5744C3.68934 15.7565 3.79982 15.922 3.93917 16.0613C4.07851 16.2007 4.24399 16.3111 4.42611 16.3864C4.60824 16.4617 4.80342 16.5003 5.00049 16.5H11.7505V18H5.00049C4.20484 18 3.44178 17.6839 2.87917 17.1213C2.31656 16.5587 2.00049 15.7956 2.00049 15V6C2.00039 5.60601 2.07792 5.21585 2.22865 4.85183C2.37938 4.48781 2.60035 4.15706 2.87895 3.87846C3.15754 3.59986 3.4883 3.37889 3.85232 3.22816C4.21634 3.07743 4.60649 2.9999 5.00049 3H20.0005C20.3945 2.9999 20.7846 3.07743 21.1487 3.22816C21.5127 3.37889 21.8434 3.59986 22.122 3.87846C22.4006 4.15706 22.6216 4.48781 22.7723 4.85183C22.9231 5.21585 23.0006 5.60601 23.0005 6V15C23.0005 15.7956 22.6844 16.5587 22.1218 17.1213C21.5592 17.6839 20.7961 18 20.0005 18H16.3742L13.8025 22.5Z'
                fill='black'
              />
            </svg>
            <p>Comments</p>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

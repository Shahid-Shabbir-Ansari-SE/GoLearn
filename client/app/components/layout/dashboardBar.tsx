import React, { useEffect, useState } from 'react'
import { useNavigate } from '@remix-run/react'
import { verifyToken } from '~/utils/auth/verifyToken'

interface User {
  first_name: string
  last_name: string
}

function dashboardBar() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState<User>(null)
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true)
        const userData = await verifyToken()
        setUser(userData[0])
        console.log(userData)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <nav className='fixed top-0 z-10 row-span-2 ml-[75px] flex w-[calc(100%-75px)] border-b bg-white px-4 py-2'>
      <div className='flex w-1/2 items-center gap-5'>
        <button onClick={handleGoBack}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14 7L9 12L14 17'
              stroke='#292929'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        {loading ? (
          <div className='flex items-center gap-3'>
            <div className='size-10 animate-pulse rounded-full bg-gray-300'></div>
            <div className='h-7 w-60 animate-pulse rounded-lg bg-gray-300'></div>
          </div>
        ) : (
          <div className='flex items-center gap-3'>
            <strong className='flex size-10 items-center justify-center rounded-full bg-primary text-xl text-white'>
              {user && user.first_name && user.first_name.charAt(0)}
            </strong>
            <strong>
              Hey, {user && user.first_name} {user && user.last_name}
            </strong>
          </div>
        )}
      </div>
      <div className='flex w-1/2 items-center justify-end gap-5'>
        <form className='flex rounded-[10px] border p-2 focus-within:border'>
          <input
            placeholder='Search'
            className='w-72 outline-none'
            type='text'
          />
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
              stroke='#C5C5C5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M20.9999 21L16.6499 16.65'
              stroke='#C5C5C5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </form>
        <button>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M22 6L12 13L2 6'
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.134 11C18.715 16.375 21 18 21 18H3C3 18 6 15.867 6 8.4C6 6.703 6.632 5.075 7.757 3.875C8.883 2.675 10.41 2 12 2C12.337 2 12.672 2.03 13 2.09M13.73 21C13.5544 21.3033 13.3021 21.5552 12.9985 21.7302C12.6948 21.9053 12.3505 21.9974 12 21.9974C11.6495 21.9974 11.3052 21.9053 11.0015 21.7302C10.6979 21.5552 10.4456 21.3033 10.27 21M19 8C19.7956 8 20.5587 7.68393 21.1213 7.12132C21.6839 6.55871 22 5.79565 22 5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2C18.2044 2 17.4413 2.31607 16.8787 2.87868C16.3161 3.44129 16 4.20435 16 5C16 5.79565 16.3161 6.55871 16.8787 7.12132C17.4413 7.68393 18.2044 8 19 8Z'
              stroke='black'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <circle cx='19' cy='5' r='4' fill='#EA4335' />
          </svg>
        </button>
        <div>
          <button className='rounded-[10px] bg-primary px-4 py-2 font-arialBold text-white'>
            ? Find Courses
          </button>
        </div>
      </div>
    </nav>
  )
}

export default dashboardBar

// import React from 'react'
import React from 'react'
import { register } from '~/utils/auth/register'
import { userRegister } from '~/types/auth'
import { useNavigate, Link } from '@remix-run/react'
import { Input, Spinner } from '@nextui-org/react'
import { mailIcon, eyeIcon, eyeSlashIcon } from '~/svg'
import { verifyToken } from '~/utils/auth/verifyToken'

const initialUserData: userRegister = {
  name: '',
  phoneNumber: '',
  email: '',
  password: ''
}

export default function Route() {
  /*
    States:
      1. userInfo: userRegister
      2. loading: boolean
      3. isVisible: boolean
      4. message: string | null
  */
  const [userInfo, setUserInfo] = React.useState<userRegister>(initialUserData)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string | null>()

  /*
    Variables:
      1. redirect: void
  */
  const redirect = useNavigate()

  /*
    Functions:
      1. toggleVisibility: void
      2. handleInputs: void
      3. validateUserData: string | null
      4. handleRegister: void
  */

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'name') {
      setUserInfo({ ...userInfo, name: value })
    }
    if (name === 'email') {
      setUserInfo({ ...userInfo, email: value })
    }
    if (name === 'phoneNumber') {
      setUserInfo({ ...userInfo, phoneNumber: value })
    }
    if (name === 'password') {
      setUserInfo({ ...userInfo, password: value })
    }
  }

  const validateUserData = (data: userRegister): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{11}$/

    if (
      !data.name.trim() ||
      !data.email.trim() ||
      !data.phoneNumber.trim() ||
      !data.password.trim()
    ) {
      return 'Please fill in all fields'
    } else if (!emailRegex.test(data.email.trim())) {
      return 'Please enter a valid email address'
    } else if (!phoneRegex.test(data.phoneNumber.trim())) {
      return 'Please enter a phone number with 11 digits'
    } else if (data.password.trim().length < 8) {
      return 'Password must be at least 8 characters long'
    }
    return null
  }

  const handleRegister = async () => {
    setLoading(true)
    const validationMessage = validateUserData(userInfo)
    if (!validationMessage) {
      try {
        const res = await register(userInfo)
        setMessage(res)
        setLoading(false)
      } catch (error: unknown) {
        setMessage('Something went wrong on our end. Please try again.')
      }
    } else {
      setLoading(false)
      setMessage(validationMessage)
    }
  }

  /*
    useEffect:
      1. Check if token exists
      2. Redirect to dashboard if token exists
      3. Clear error messages after 2 seconds
   */
  React.useEffect(() => {
    const checkToken = async () => {
      const res = await verifyToken()
      if (res.message === 'Access granted!') {
        redirect('/dashboard')
      }
    }
    checkToken()
  })

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage('')
    }, 2000)

    return () => clearTimeout(timeout)
  }, [message])

  React.useEffect(() => {
    if (message === 'User registered successfully') {
      redirect('/dashboard')
    }
  })

  return (
    <div className='flex h-[calc(100vh-64px)] items-center justify-center py-10 md:gap-7'>
      {/*
        Image:
          1. Image of Woman with Book
      */}
      <div className='hidden size-[450px] md:flex'>
        <img
          className='w-[470px] rounded-full object-cover object-center
          shadow-2xl
          '
          src='https://s3-alpha-sig.figma.com/img/d7a8/6cf8/98eb84737d713716ab0e0dadcb47f22d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KClINDzOUDdRjbFbYRZFWJigfaOS9GdmOGweWLsagu0T04p8teNimZ~JHTD8uZywoLDMOh2FVwOz78KhdGk2yOKgzFA1tmM4HwKKNQU3qBCzDWmuHwNnSPXbAv~ZP-Uh4dP7qMcdEAe~GoCPfubuefpXYHKD-AifJpbKMLclOUgi07Ot2x10sI6vqjjSS6ljphhp775SqE-glRy02FdOsdxdOJqMbYqj8rCI9MLft0C7XcPrYeqoj-hgfYfiRWUPXl4HT-3gLyonSuCk3YdFp8~wq2ixwpUHoeKP-QoqUnN6zmiBJpABJV6omZ34UqY13V5IKqEYWMM-iubtkNZmxw__'
          alt=''
        />
      </div>

      <div className='relative flex h-full w-[400px] flex-col justify-between px-5 py-3 md:px-0 xl:h-[450px]'>
        {/*
            Spinner:
              1. Show Spinner when loading
              2. Show message when loading
        */}
        {loading && (
          <div className='absolute z-[1000] -ml-[2.5%] -mt-3 flex h-[calc(100%+6px)] w-[105%] flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 bg-opacity-30 backdrop-blur-sm'>
            <Spinner color='secondary' />
            <p className='text-center text-sm text-primary'>
              Login Successful! Redirecting...
            </p>
          </div>
        )}

        {/*
            1.Google Login Button
            2. Divider
        */}
        <button className='flex h-10 w-full items-center justify-center gap-2.5 rounded-[7px] bg-primary-50 py-2'>
          <img className='h-5' src='/svg/google.svg' alt='' />
          <p>Continue with Google</p>
        </button>
        <div className='flex w-full items-center gap-3 text-center text-gray-500'>
          <hr className='w-full' />
          <p>or</p>
          <hr className='w-full' />
        </div>

        {/*
            Form:
              1. Name
              2. Email
              3. Phone Number
              4. Password
              5. Message
              6. Register Button
        */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleRegister()
          }}
          className='flex flex-col justify-center gap-3'
        >
          <Input
            label='Name'
            placeholder='Enter your name'
            labelPlacement='outside'
            name='name'
            value={userInfo.name}
            onChange={handleInputs}
          />
          <Input
            label='Email'
            placeholder='learn@golearn.edu.com'
            labelPlacement='outside'
            name='email'
            value={userInfo.email}
            onChange={handleInputs}
            endContent={mailIcon()}
          />
          <Input
            label='Phone Number'
            placeholder='Enter your phone number'
            labelPlacement='outside'
            name='phoneNumber'
            value={userInfo.phoneNumber}
            onChange={handleInputs}
          />
          <Input
            label='Password'
            placeholder='Enter your password'
            name='password'
            value={userInfo.password}
            onChange={handleInputs}
            labelPlacement='outside'
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={toggleVisibility}
              >
                {isVisible ? eyeSlashIcon() : eyeIcon()}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
          />
          {message && (
            <div className='text-center text-sm text-red-500'>{message}</div>
          )}
          <button
            type='submit'
            className='my-1 h-10 w-full rounded-[10px] bg-primary font-interSemiBold text-white'
            onClick={handleRegister}
          >
            Register
          </button>
        </form>

        {/*
          Login Link:
            1. Login Link
        */}
        <div className='text-center text-sm'>
          <span>Already have an account? </span>
          <Link to='/login' className='text-primary'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

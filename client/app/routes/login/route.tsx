import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from '@remix-run/react'
import { userLogin } from '~/types/auth'
import { verifyToken } from '~/utils/auth/verifyToken'
import { Spinner, Input } from '@nextui-org/react'
import { mailIcon, eyeSlashIcon, eyeIcon } from '~/svg'
import { loginWomen } from '~/image'

export default function Route() {
  /*
    States:
      1. email: string
      2. password: string
      3. errorMessages: string
      4. isVisible: boolean
      5. isLoading: boolean
  */
  const [email, setEmail] = React.useState(String)
  const [password, setPassword] = React.useState(String)
  const [errorMessages, setErrorMessages] = React.useState(String)
  const [isVisible, setIsVisible] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  /*
    Variables:
      1. redirect: void
  */
  const redirect = useNavigate()

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
      setErrorMessages('')
    }, 2000)

    return () => clearTimeout(timeout)
  }, [errorMessages])

  /*
    Functions:
      1. toggleVisibility: void
      2. handleInputs: void
      3. handleLogin: void
  */
  const toggleVisibility = () => setIsVisible(!isVisible)
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }
  const handleLogin = async () => {
    const userInfo: userLogin = {
      email: email,
      password: password
    }
    try {
      const res = await login(userInfo)
      if (res.message) {
        setErrorMessages(res.message)
        console.log(res)
      } else {
        setErrorMessages('Login Successful! Redirecting...')
        setIsLoading(true)
        redirect('/dashboard')
      }
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }
  return (
    <div className='items-center justify-center py-10 md:flex md:h-[calc(100vh-64px)] md:gap-7'>
      {/*
        Image:
          1. Image of Woman smiling
      */}
      <div className='hidden md:flex xl:w-[350px]'>
        <img
          className='size-[350px] rounded-3xl object-cover shadow-2xl'
          src={loginWomen}
          alt=''
        />
      </div>

      <div className='relative flex h-[400px] w-full flex-col justify-between px-5 py-3 md:h-[350px] md:w-[320px] md:px-0'>
        {/*
            Spinner:
              1. Show Spinner when loading
              2. Show message when loading
        */}
        {isLoading && (
          <div className='absolute z-[1000] -ml-[2.5%] -mt-3 flex h-full w-[105%] flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 bg-opacity-30 backdrop-blur-sm'>
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
        <button className='flex h-10 w-full items-center justify-center gap-2.5 rounded-[7px] bg-primary-50'>
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
            1. Email Input
            2. Password Input
            3. Error Messages
            4. Login Button
        */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
          }}
          className='flex flex-col justify-center gap-3'
        >
          <Input
            label='Email'
            placeholder='learn@golearn.edu.com'
            labelPlacement='outside'
            name='email'
            value={email}
            onChange={handleInputs}
            endContent={mailIcon()}
          />
          <Input
            label='Password'
            placeholder='Enter your password'
            name='password'
            value={password}
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
          {errorMessages && (
            <p className='text-center text-xs text-red-500'>{errorMessages}</p>
          )}
          <button
            type='submit'
            className='h-10 w-full rounded-[10px] bg-primary font-interSemiBold text-white'
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        {/*
          Register Link:
            1. Register Link
          */}
        <div className='text-center text-sm'>
          <span>Don&apos;t have an account? </span>
          <Link to='/register' className='text-primary'>
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

/*
  API Call:
    1. userLogin: email, password
    2. login: userLogin
*/
export async function login(user: userLogin) {
  try {
    const res = await axios.post('http://localhost:6060/api/auth/login', user, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}

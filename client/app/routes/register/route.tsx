// import React from 'react'
import { register } from '~/utils/auth/register'
import { userRegister } from '~/types/auth'
import React from 'react'
import { useNavigate } from '@remix-run/react'
import Loader from '~/components/reusable/loader'

export default function Route() {
  const [name, setName] = React.useState(String)
  const [email, setEmail] = React.useState(String)
  const [phoneNumber, setPhoneNumber] = React.useState(String)
  const [password, setPassword] = React.useState(String)
  const redirect = useNavigate()
  const [loading, setLoading] = React.useState(false)

  const userInfo: userRegister = {
    name: name,
    phoneNumber: phoneNumber,
    email: email,
    password: password
  }

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'name') {
      setName(value)
    }
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'phoneNumber') {
      setPhoneNumber(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  const handleRegister = async () => {
    setLoading(true)
    try {
      const res = await register(userInfo)
      setLoading(false)
      if (res && res.message === 'User registered successfully') {
        redirect('/role')
      }
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <div className='col-span-2 flex flex-row'>
      <div className='hidden w-1/2 md:flex lg:flex xl:w-[55%]'>
        <img
          className='w-full object-cover md:h-screen lg:h-full xl:max-h-screen xl:min-h-[678px]'
          src='/images/register/smileWoman.png'
          alt=''
        />
      </div>
      <div className='grid h-screen w-full items-center md:w-1/2 lg:min-h-full lg:w-1/2 xl:h-screen xl:w-[45%]'>
        {loading && <Loader />}
        <div className='grid items-center gap-[17px] px-5 py-[27px]'>
          <h1 className='px-[22px] py-[26px] text-center font-arialBold text-[32px] text-primary'>
            GoLearn
          </h1>
          <div className='grid gap-5 lg:flex'>
            <button className='flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[7px] border font-interSemiBold'>
              <img src='/svg/facebook.svg' alt='' />
              <p>Continue with Facebook</p>
            </button>
            <button className='flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[7px] border font-interSemiBold'>
              <img src='/svg/google.svg' alt='' />
              <p>Continue with Google</p>
            </button>
          </div>
          <div className='flex h-full items-center gap-[10px]'>
            <hr className='w-full' />
            <h1 className='p-3 font-arialBold text-primary'>OR</h1>
            <hr className='w-full' />
          </div>

          <input
            className='h-[55px] w-full rounded-[7px] border pl-3 outline-primary'
            type='text'
            placeholder='Name'
            name='name'
            onChange={handleInputs}
            value={name}
          />
          <input
            className='h-[55px] w-full rounded-[7px] border pl-3 outline-primary'
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleInputs}
            value={email}
          />
          <input
            className='h-[55px] w-full rounded-[7px] border pl-3 outline-primary'
            type='text'
            placeholder='Phone Number'
            name='phoneNumber'
            onChange={handleInputs}
            value={phoneNumber}
          />
          <div className='flex h-[55px] w-full rounded-[7px] border px-3 focus-within:border-2 focus-within:border-primary'>
            <input
              className='w-full outline-none'
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleInputs}
              value={password}
            />
            <button className='text-primary'>Show</button>
          </div>
          <button
            onClick={handleRegister}
            className='w-full rounded-[10px] bg-primary py-[10px] font-interSemiBold text-white'
          >
            Register
          </button>
          <h1 className='w-full text-center'>
            Already have an account ?{' '}
            <button className='font-interSemiBold text-primary'>Log In</button>
          </h1>
        </div>
      </div>
    </div>
  )
}

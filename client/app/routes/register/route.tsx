// import React from 'react'
import { register } from '~/utils/auth/register'
import { userRegister } from '~/types/auth'
import React from 'react'

export default function Route() {
  const [name, setName] = React.useState(String)
  const [email, setEmail] = React.useState(String)
  const [phoneNumber, setPhoneNumber] = React.useState(String)
  const [password, setPassword] = React.useState(String)

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
    try {
      const res = await register(userInfo)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    console.log(userInfo)
  }

  return (
    <div className='flex flex-row col-span-2'>
      <div className='hidden w-1/2 xl:w-[55%] lg:flex md:flex'>
        <img
          className='lg:h-full xl:min-h-[678px] xl:max-h-screen md:h-screen object-cover w-full'
          src='/images/register/smileWoman.png'
          alt=''
        />
      </div>
      <div className='md:w-1/2 lg:w-1/2 xl:w-[45%] w-full lg:min-h-full xl:h-screen h-screen grid items-center'>
        <div className='grid items-center gap-[17px] px-5 py-[27px]'>
          <h1 className='px-[22px] py-[26px] text-center font-arialBold text-[32px] text-primary'>
            GoLearn
          </h1>
          <div className='grid gap-5 lg:flex'>
            <button
              className='flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[7px] border font-interSemiBold'>
              <img src='/svg/facebook.svg' alt='' />
              <p>Continue with Facebook</p>
            </button>
            <button
              className='flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[7px] border font-interSemiBold'>
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
          <div
            className='flex h-[55px] w-full rounded-[7px] border px-3 focus-within:border-2 focus-within:border-primary'>
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

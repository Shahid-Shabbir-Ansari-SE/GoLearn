import React from 'react'
import { login } from '~/utils/auth/login'
import { userLogin } from '~/types/auth'

export default function Route() {
  const [email, setEmail] = React.useState(String)
  const [password, setPassword] = React.useState(String)
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
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='md:flex lg:col-span-2'>
      <div className='hidden md:flex md:w-1/2 xl:w-[55%]'>
        <img
          className='h-screen w-full object-cover'
          src='/images/register/smileWoman.png'
          alt=''
        />
      </div>
      <div className='grid min-h-screen w-full items-center md:w-1/2 xl:w-[45%]'>
        <div className='grid gap-[17px] px-5 py-[27px]'>
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
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleInputs}
            value={email}
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
          <button className='w-full rounded-[10px] bg-primary py-[10px] font-interSemiBold text-white'>
            Login
          </button>
          <h1 className='w-full text-center'>
            Don&apos;t have an account ?
            <button
              onClick={handleLogin}
              className='font-interSemiBold text-primary'
            >
              Register
            </button>
          </h1>
        </div>
      </div>
    </div>
  )
}

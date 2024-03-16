import React from 'react'
import { login } from '~/utils/auth/login'
import { userLogin } from '~/types/auth'

export default function Route () {
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
    const userInfo:userLogin = {
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
    <div className='lg:col-span-2 md:flex'>
      <div className='md:w-1/2 xl:w-[55%] md:flex hidden'>
        <img
          className='h-screen w-full object-cover'
          src='/images/register/smileWoman.png'
          alt=''
        />
      </div>
      <div className='min-h-screen grid items-center w-full xl:w-[45%] md:w-1/2'>
      <div className='grid gap-[17px] px-5 py-[27px]'>
        <h1 className='font-arialBold text-primary px-[22px] py-[26px] text-center text-[32px]'>
          GoLearn
        </h1>
        <div className='gap-5 grid lg:flex'>
          <button className='font-interSemiBold flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[7px] border'>
            <img src='/svg/facebook.svg' alt='' />
            <p>Continue with Facebook</p>
          </button>
          <button className='font-interSemiBold flex h-[52px] w-full items-center justify-center gap-[10px] rounded-[7px] border'>
            <img src='/svg/google.svg' alt='' />
            <p>Continue with Google</p>
          </button>
        </div>
        <div className='flex h-full items-center gap-[10px]'>
          <hr className='w-full' />
          <h1 className='font-arialBold text-primary p-3'>OR</h1>
          <hr className='w-full' />
        </div>
        <input
          className='outline-primary h-[55px] w-full rounded-[7px] border pl-3'
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleInputs}
          value={email}
        />
        <div className='focus-within:border-primary flex h-[55px] w-full rounded-[7px] border px-3 focus-within:border-2'>
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
        <button className='bg-primary font-interSemiBold w-full rounded-[10px] py-[10px] text-white'>
          Login
        </button>
        <h1 className='w-full text-center'>
          Don&apos;t have an account ?
          <button
            onClick={handleLogin}
            className='text-primary font-interSemiBold'>Register</button>
        </h1>
      </div>
    </div></div>
  )
}
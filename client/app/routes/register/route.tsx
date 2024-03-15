// import React from 'react'

const route = () => {
  return (
    <div className='lg:col-span-2 lg:flex'>
      <div className='lg:w-1/2'>
        <img
          className='h-full w-full object-cover'
          src='/images/register/smileWoman.png'
          alt=''
        />
      </div>
      <div className='mt-[45px] grid  w-full gap-[17px] px-5 py-[27px] lg:w-1/2 '>
        <h1 className='font-arialBold text-primary px-[22px] py-[26px] text-center text-[32px]'>
          GoLearn
        </h1>
        <div className='gap-5 lg:flex'>
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
          type='text'
          placeholder='Name'
        />
        <input
          className='outline-primary h-[55px] w-full rounded-[7px] border pl-3'
          type='email'
          placeholder='Email'
        />
        <input
          className='outline-primary h-[55px] w-full rounded-[7px] border pl-3'
          type='number'
          placeholder='Phone Number'
        />
        <div className='focus-within:border-primary flex h-[55px] w-full rounded-[7px] border px-3 focus-within:border-2'>
          <input
            className='w-full outline-none'
            type='password'
            placeholder='Password'
          />
          <button className='text-primary'>Show</button>
        </div>
        <button className='bg-primary font-interSemiBold w-full rounded-[10px] py-[10px] text-white'>
          Register
        </button>
        <h1 className='w-full text-center'>
          Already have an account ?{' '}
          <button className='text-primary font-interSemiBold'>Log In</button>
        </h1>
      </div>
    </div>
  )
}

export default route

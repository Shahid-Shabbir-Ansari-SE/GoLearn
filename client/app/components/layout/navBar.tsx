import React from 'react'

export default function NavBar() {
  const [scroll, setScroll] = React.useState(false)

  const handleNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  React.useEffect(() => {
    handleNavbarColor()
    window.addEventListener('scroll', handleNavbarColor)

    return () => {
      window.removeEventListener('scroll', handleNavbarColor)
    }
  }, [])

  return (
    <div
      className={`${scroll ? 'bg-white text-black md:text-white' : 'text-white'} fixed top-0 z-50 flex h-[63px] w-screen items-center justify-between overflow-hidden px-5 font-interSemiBold shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] md:absolute md:flex md:h-[115px] md:shadow-none`}
    >
      <div className='flex h-[115px] w-[192px] items-center md:-ml-6 xl:-mt-[14px] xl:pl-[22px]'>
        <img className='hidden md:block' src='/logo.svg' alt='' />
        <h1 className='text-xl md:invisible'>GoLearn</h1>
      </div>
      <div className='hidden h-[49px] w-[1281px] xl:flex'>
        <div className='flex w-full justify-center'>
          <ul className='flex gap-[20px] px-5 py-[10px] text-[16px]'>
            <li className='flex cursor-pointer'>
              Home
              <img src='/svg/chevron.svg' alt='' />
            </li>
            <li className='flex cursor-pointer'>
              Products
              <img src='/svg/chevron.svg' alt='' />
            </li>
            <li className='flex cursor-pointer'>
              Curriculum
              <img src='/svg/chevron.svg' alt='' />
            </li>
            <li className='flex cursor-pointer'>
              Solutions
              <img src='/svg/chevron.svg' alt='' />
            </li>
            <li className='flex cursor-pointer'>
              Pricing
              <img src='/svg/chevron.svg' alt='' />
            </li>
            <li className='flex cursor-pointer'>
              Enterprise
              <img src='/svg/chevron.svg' alt='' />
            </li>
          </ul>
        </div>
        <div className='flex gap-9 pr-[26px]'>
          <img src='/images/homePage/search.png' className='h-[49px]' alt='' />
          <button className='h-[46px] w-[83px] rounded-[10px] bg-white text-primary'>
            Login
          </button>
          <button className='w-[137px] rounded-[10px] border-[1px] border-white'>
            Join for Free
          </button>
        </div>
      </div>
      <div className='mr-0 flex gap-5 md:mr-4 xl:mr-0 xl:hidden'>
        <svg
          width='24'
          height='25'
          viewBox='0 0 24 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z'
            stroke={`${scroll ? '#000000' : '#ffffff'}`}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M13.7295 21.5C13.5537 21.8031 13.3014 22.0547 12.9978 22.2295C12.6941 22.4044 12.3499 22.4965 11.9995 22.4965C11.6492 22.4965 11.3049 22.4044 11.0013 22.2295C10.6977 22.0547 10.4453 21.8031 10.2695 21.5'
            stroke={`${scroll ? '#000000' : '#ffffff'}`}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>

        <svg
          width='24'
          height='25'
          viewBox='0 0 24 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 6.5L10 6.5'
            stroke={`${scroll ? '#000000' : '#ffffff'}`}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M20 12.5L4 12.5'
            stroke={`${scroll ? '#000000' : '#ffffff'}`}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M20 18.5H14'
            stroke={`${scroll ? '#000000' : '#ffffff'}`}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>
    </div>
  )
}

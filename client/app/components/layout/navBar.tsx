export default function NavBar() {
  return (
    <div className='font-interSemiBold z-50 flex h-[115px] items-center justify-between text-white'>
      <div className='-mt-[12px] px-[22px] py-[26px]'>
        <img src='/logo.svg' alt='' />
      </div>
      <div className='flex h-[49px] w-[1281px]'>
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
    </div>
  )
}

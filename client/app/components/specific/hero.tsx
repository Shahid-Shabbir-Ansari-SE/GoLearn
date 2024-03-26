export default function hero() {
  return (
    <div>
      <div className='relative flex h-full w-full flex-col items-center justify-center xl:flex-row'>
        <div className='mt-32 flex h-[259px] w-[312px] flex-col gap-[16px] text-white md:mt-0 md:w-3/4 md:gap-[18px] xl:-mt-[50px] xl:ml-[64px] xl:w-[calc(100%-959px)]'>
          <h1 className='w-full font-interBold text-xl md:text-4xl'>
            Launch a new career in as <br className='md:hidden' /> little as 60
            Days..
          </h1>
          <p className='w-full font-interLight text-xs md:text-base'>
            Build Skills With Courses, Certificates, And Degrees Online From
            Well Experienced Tutors.
          </p>
          <div className='flex gap-[10px] font-interSemiBold text-sm md:w-full md:text-base'>
            <button className='flex items-center gap-2 rounded-[10px] bg-white px-[17.7px] py-[8.85px] text-primary shadow-[0px_10px_20px_0px_#0000000D] md:gap-[10px] md:px-[20px] md:py-[10px]'>
              <img
                className='size-5 md:size-6'
                src='/images/homePage/news.png'
                alt=''
              />
              Learn More
            </button>
            <button className='flex items-center gap-2 rounded-[10px] border-[1px] border-white bg-transparent px-[17.7px]  py-[8.85px] shadow-[0px_10px_20px_0px_#0000000D] md:gap-[10px] md:px-[20px] md:py-[10px]'>
              <img
                className='size-5 md:size-6'
                src='/images/homePage/restart.png'
                alt=''
              />
              Join for Free
            </button>
          </div>
        </div>
        <div className='-ml-5 -mt-[85px] flex items-end md:-mt-[50px] md:ml-0 xl:w-[959px]'>
          <img src='/images/homePage/instructorPanel.png' alt='size-3 md:' />
        </div>
      </div>
      <div className='-mt-[20px] flex w-screen justify-center md:mt-10 md:w-full xl:justify-end'>
        <ul className='flex justify-center gap-[10.78px] md:gap-[22px] xl:w-[830px]'>
          <li className='flex items-center gap-[5px] rounded-[4.9px] bg-white px-[.94px] py-[9.8px] text-[9.5px] shadow-[0px_10px_20px_0px_#0000000D] md:gap-[10px] md:rounded-[10px] md:px-5 md:py-[10px] md:text-sm lg:text-base'>
            <img
              src='/images/homePage/playlist.png'
              className='size-3 md:size-5 xl:size-6'
              alt=''
            />
            Online School
          </li>
          <li className='flex items-center gap-[5px] rounded-[4.9px] bg-white px-[.94px] py-[9.8px] text-[9.5px] shadow-[0px_10px_20px_0px_#0000000D] md:gap-[10px] md:rounded-[10px] md:px-5 md:py-[10px] md:text-sm lg:text-base'>
            <img
              src='/images/homePage/chat.png'
              className='size-3 md:size-6'
              alt=''
            />
            Chat
          </li>
          <li className='flex items-center gap-[5px] rounded-[4.9px] bg-white px-[.94px] py-[9.8px] text-[9.5px] shadow-[0px_10px_20px_0px_#0000000D] md:gap-[10px] md:rounded-[10px] md:px-5 md:py-[10px] md:text-sm lg:text-base'>
            <img
              src='/images/homePage/discount.png'
              className='size-3 md:size-6'
              alt=''
            />
            Dashboard
          </li>
          <li className='flex items-center gap-[5px] rounded-[4.9px] bg-white px-[.94px] py-[9.8px] text-[9.5px] shadow-[0px_10px_20px_0px_#0000000D] md:gap-[10px] md:rounded-[10px] md:px-5 md:py-[10px] md:text-sm lg:text-base'>
            <img
              src='/images/homePage/wallet.png'
              className='size-3 md:size-6'
              alt=''
            />
            Wallet
          </li>
          <li className='flex items-center gap-[5px] rounded-[4.9px] bg-white px-[.94px] py-[9.8px] text-[9.5px] shadow-[0px_10px_20px_0px_#0000000D] md:gap-[10px] md:rounded-[10px] md:px-5 md:py-[10px] md:text-sm lg:text-base'>
            <img
              src='/images/homePage/calendar.png'
              className='size-3 md:size-6'
              alt=''
            />
            Calendar
          </li>
        </ul>
      </div>
    </div>
  )
}

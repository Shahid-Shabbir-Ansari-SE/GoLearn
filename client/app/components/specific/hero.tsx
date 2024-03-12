export default function hero() {
  return (
    <div>
      <div className='flex h-full w-full items-center'>
        <div className='-mt-[50px] ml-[64px] flex h-[259px] w-[calc(100%-959px)] flex-col gap-[18px] text-white'>
          <h1 className='font-interBold text-4xl'>
            Launch a new career in as little as 60 Days..
          </h1>
          <p className='font-interLight'>
            Build Skills With Courses, Certificates, And Degrees Online From
            Well Experienced Tutors.
          </p>
          <div className='font-interSemiBold flex gap-[10px]'>
            <button className='text-primary flex items-center gap-[10px] rounded-[10px] bg-white px-[20px] py-[10px] shadow-[0px_10px_20px_0px_#0000000D]'>
              <img
                className='size-[24px]'
                src='/images/homePage/news.png'
                alt=''
              />
              Learn More
            </button>
            <button className='flex items-center gap-[10px] rounded-[10px] border-[1px] border-white bg-transparent px-[20px] py-[10px] shadow-[0px_10px_20px_0px_#0000000D]'>
              <img
                className='size-[24px]'
                src='/images/homePage/restart.png'
                alt=''
              />
              Join for Free
            </button>
          </div>
        </div>
        <div className='-mt-[50px] flex w-[959px] flex-col items-end gap-[22px]'>
          <img src='/images/homePage/instructorPanel.png' alt='' />
        </div>
      </div>
      <div className='mt-10 flex w-full justify-end'>
        <ul className='flex w-[830px] justify-center gap-[22px]'>
          <li className='flex gap-[10px] rounded-[10px] bg-white px-5 py-[10px] shadow-[0px_10px_20px_0px_#0000000D]'>
            <img
              src='/images/homePage/playlist.png'
              className='size-6'
              alt=''
            />
            Online School
          </li>
          <li className='flex gap-[10px] rounded-[10px] bg-white px-5 py-[10px] shadow-[0px_10px_20px_0px_#0000000D]'>
            <img src='/images/homePage/chat.png' className='size-6' alt='' />
            Chat
          </li>
          <li className='flex gap-[10px] rounded-[10px] bg-white px-5 py-[10px] shadow-[0px_10px_20px_0px_#0000000D]'>
            <img
              src='/images/homePage/discount.png'
              className='size-6'
              alt=''
            />
            Dashboard
          </li>
          <li className='flex gap-[10px] rounded-[10px] bg-white px-5 py-[10px] shadow-[0px_10px_20px_0px_#0000000D]'>
            <img src='/images/homePage/wallet.png' className='size-6' alt='' />
            Wallet
          </li>
          <li className='flex gap-[10px] rounded-[10px] bg-white px-5 py-[10px] shadow-[0px_10px_20px_0px_#0000000D]'>
            <img
              src='/images/homePage/calendar.png'
              className='size-6'
              alt=''
            />
            Calendar
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function NewsLetter() {
  return (
    <div className='relative'>
      <div className='top relative z-10 h-[586px] w-[469px]'>
        <img
          className='absolute -left-3 top-[20%] z-30 size-[469px]'
          src='/svg/frame.svg'
          alt=''
        />
        <img
          className='absolute left-[17%] top-[35%] z-40 size-[291px]'
          src='/images/homePage/women.png'
          alt=''
        />
      </div>
      <div className=''>
        <img
          className='absolute right-6 top-0 -z-10 h-[514px] w-[670px]'
          src='/svg/newsLetter/rectangle.svg'
          alt=''
        />
        <div className='absolute right-12 top-10 z-0 flex h-[586px] w-[84%] items-center gap-20 rounded-[10px] bg-gradient-to-br from-primary from-70% to-[#FF097F]'>
          <img
            src='/svg/joinus.svg'
            className='ml-80 h-[116px] w-[331px]'
            alt=''
          />
          <div className='space-y-[45px] pr-16 text-white'>
            <h1 className='font-interSemiBold text-2xl'>
              Want to become an instructor?
            </h1>
            <p>
              Becoming an instructor is a rewarding journey that involves a
              combination of expertise in your field, effective communication
              skills, and a passion for teaching. Here are steps and
              considerations to guide you in becoming an instructor:
            </p>
            <div className='flex gap-5 text-white'>
              <input
                className='trans h-[49px] w-[324px] rounded-[10px] border-[1px] border-white bg-transparent pl-[27px] outline-none'
                type='text'
              />
              <button className='w-[83px] rounded-[10px] bg-white p-[10px] font-interSemiBold text-primary'>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

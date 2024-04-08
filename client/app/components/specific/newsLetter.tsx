import { women } from '~/image'

export default function NewsLetter() {
  return (
    <div className='relative m-4 xl:h-auto'>
      <div className='absolute -z-40 h-full w-full rounded-[10px] bg-gradient-to-br from-primary from-70% to-[#FF097F] xl:hidden'></div>
      <div className='flex w-full items-center justify-center xl:relative xl:h-[620px]'>
        <div className='relative flex size-60 items-center justify-center bg-[url("/svg/frame.svg")] bg-[length:15rem_15rem] md:size-[22rem] md:bg-[length:22rem_22rem] xl:absolute xl:-left-4 xl:z-10 xl:size-96 xl:bg-[length:24rem_24rem]'>
          <img
            className='absolute size-40 md:size-60 xl:size-64'
            src={women}
            alt=''
          />
        </div>
      </div>
      <div className=''>
        <img
          className='absolute right-6 top-0 -z-10 hidden h-[514px] w-[670px] xl:flex'
          src='/svg/newsLetter/rectangle.svg'
          alt=''
        />
        <div className='top-10 z-0 mx-2 grid items-center gap-5 rounded-[10px] from-primary from-70% to-[#FF097F] xl:absolute xl:right-12 xl:m-0 xl:flex xl:h-[586px] xl:w-[84%] xl:gap-10 xl:bg-gradient-to-br'>
          <img
            src='/svg/joinus.svg'
            className='mx-auto w-full px-10 md:w-[65%] xl:m-0 xl:ml-60 xl:h-[116px] xl:w-[331px] xl:p-0'
            alt=''
          />
          <div className='space-y-5 text-center text-white xl:space-y-[45px] xl:text-left'>
            <h1 className='font-interSemiBold text-lg xl:text-2xl'>
              Want to become an instructor?
            </h1>
            <p className='px-4 xl:p-0'>
              Becoming an instructor is a rewarding journey that involves a
              combination of expertise in your field, effective communication
              skills, and a passion for teaching. Here are steps and
              considerations to guide you in becoming an instructor:
            </p>
            <div className='-ml-1.5 flex justify-center gap-1 text-white lg:gap-3 xl:m-0 xl:justify-start xl:gap-5'>
              <input
                className='h-[49px] w-[60vw] rounded-[10px] border-[1px] border-white bg-transparent pl-[27px] outline-none xl:w-[324px]'
                type='text'
              />
              <button className='mb-4 h-[49px] w-[83px] rounded-[10px] bg-white p-[10px] font-interSemiBold text-primary'>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

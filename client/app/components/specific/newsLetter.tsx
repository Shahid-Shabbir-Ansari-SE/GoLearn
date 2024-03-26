export default function NewsLetter() {
  return (
    <div className='relative xl:h-auto m-4'>
      <div className='w-full h-full rounded-[10px] xl:hidden bg-gradient-to-br from-primary from-70% to-[#FF097F] absolute -z-40'></div>
      <div className='w-full xl:relative justify-center items-center flex xl:h-[620px]'>
        <div
          className='size-60 md:size-[22rem] xl:-left-4 xl:z-10 xl:absolute xl:size-96 relative flex justify-center items-center bg-[url("/svg/frame.svg")] bg-[length:15rem_15rem] md:bg-[length:22rem_22rem] xl:bg-[length:24rem_24rem]'>
          <img
            className='absolute size-40 xl:size-64 md:size-60'
            src='/images/homePage/women.png'
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
        <div
          className='top-10 z-0 xl:m-0 mx-2 grid items-center gap-5 rounded-[10px] xl:absolute xl:right-12 xl:flex xl:h-[586px] xl:w-[84%] xl:gap-10 xl:bg-gradient-to-br from-primary from-70% to-[#FF097F]'>
          <img
            src='/svg/joinus.svg'
            className='mx-auto md:w-[65%] xl:m-0 w-full xl:p-0 px-10 xl:ml-60 xl:h-[116px] xl:w-[331px]'
            alt=''
          />
          <div className='text-center space-y-5 xl:text-left text-white xl:space-y-[45px]'>
            <h1 className='font-interSemiBold text-lg xl:text-2xl'>
              Want to become an instructor?
            </h1>
            <p className='px-4 xl:p-0'>
              Becoming an instructor is a rewarding journey that involves a
              combination of expertise in your field, effective communication
              skills, and a passion for teaching. Here are steps and
              considerations to guide you in becoming an instructor:
            </p>
            <div className='flex lg:gap-3 justify-center gap-1 xl:gap-5 text-white xl:m-0 xl:justify-start -ml-1.5'>
              <input
                className='h-[49px] rounded-[10px] border-[1px] w-[60vw] border-white bg-transparent pl-[27px] outline-none xl:w-[324px]'
                type='text'
              />
              <button
                className='w-[83px] h-[49px] mb-4 rounded-[10px] bg-white p-[10px] font-interSemiBold text-primary'>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className='grid w-full justify-center xl:flex xl:gap-32 xl:px-48'>
      <div className='flex w-full justify-center xl:w-[524px]'>
        <img
          className='w-[524px] px-10 py-5 md:mb-5 md:p-0 md:pb-10'
          src='/images/homePage/smileWoman.png'
          alt=''
        />
      </div>
      <div className='row-span-3 flex w-full flex-col items-center justify-center gap-3 xl:w-[calc(100%-524px)]'>
        <h1 className='font-interBold md:text-3xl xl:text-[32px]'>
          <span className='text-primary'>Learn </span>design skills when and
          where you like.
        </h1>
        <p className='px-4 text-center text-sm md:text-xl xl:px-0 xl:text-left xl:text-xl'>
          Use the list below to bring attention to your product’s key
          differentiator.
        </p>
        <img
          className='px-20 pb-5 md:py-5 xl:-ml-5 xl:p-0'
          src='/images/homePage/designStrategy.png'
          alt=''
        />
      </div>
    </div>
  )
}

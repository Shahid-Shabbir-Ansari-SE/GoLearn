export default function Skills() {
  return (
    <div className='flex w-full gap-32 px-48'>
      <div className='w-[524px]'>
        <img className='' src='/images/homePage/smileWoman.png' alt='' />
      </div>
      <div className='row-span-3 flex w-[calc(100%-524px)] flex-col gap-3'>
        <h1 className='font-interBold text-[32px]'>
          <span className='text-primary'>Learn </span>design skills when and
          where you like.
        </h1>
        <p className='text-xl'>
          Use the list below to bring attention to your product’s key
          differentiator.
        </p>
        <img className='' src='/images/homePage/designStrategy.png' alt='' />
      </div>
    </div>
  )
}

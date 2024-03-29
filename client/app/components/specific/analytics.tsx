export default function Analytics() {
  return (
    <div className='mt-16 items-center justify-between space-y-7 px-7 text-center md:flex md:w-full md:flex-col md:items-center md:justify-center xl:flex xl:space-y-0 xl:px-36 xl:text-left'>
      <div className='px-7 md:w-[62%] xl:w-[50%]'>
        <img src='/images/homePage/analytics.png' alt='' />
      </div>
      <div className='flex flex-col gap-5 xl:w-[50%]'>
        <h1 className='font-interBold xl:pr-60 xl:font-interSemiBold xl:text-3xl'>
          We make it effortlessly to track all student analytics
        </h1>
        <p className='xl:pr-32'>
          We understand the significance of monitoring and analyzing student
          data, and our streamlined approach ensures that the process is not
          only efficient but also user-friendly.
        </p>
        <img src='/images/homePage/analyticsBullets.png' alt='' />
      </div>
    </div>
  )
}

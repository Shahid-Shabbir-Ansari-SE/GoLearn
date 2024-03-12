export default function Analytics() {
  return (
    <div className='flex items-center justify-between px-36'>
      <div className='w-[50%]'>
        <img className='' src='/images/homePage/analytics.png' alt='' />
      </div>
      <div className='flex w-[50%] flex-col gap-5'>
        <h1 className='font-interSemiBold pr-60 text-3xl'>
          We make it effortlessly to track all student analytics
        </h1>
        <p className='pr-32'>
          We understand the significance of monitoring and analyzing student
          data, and our streamlined approach ensures that the process is not
          only efficient but also user-friendly.
        </p>
        <img src='/images/homePage/analyticsBullets.png' alt='' />
      </div>
    </div>
  )
}

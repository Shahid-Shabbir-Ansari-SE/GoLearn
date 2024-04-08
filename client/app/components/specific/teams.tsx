import { communicatingWomen } from '~/image'

export default function teams() {
  return (
    <div className='flex flex-col-reverse items-center justify-between xl:-mt-10 xl:flex-row xl:px-48'>
      <div className='mt-16 flex w-full flex-col gap-5 px-4 text-center xl:w-1/2 xl:p-0 xl:text-left'>
        <h1 className='font-interSemiBold text-xl md:text-3xl'>
          Collaborate with your team anytime, anywhere
        </h1>
        <p className='md:px-20 md:text-xl xl:pl-0 xl:pr-10'>
          By leveraging advanced tools and technologies, we have developed a
          system that allows educators and administrators to effortlessly access
          and interpret vital insights, empowering them to make informed
          decisions and enhance the overall educational experience for every
          student.
        </p>
        <ul className='grid justify-center gap-2 font-interBold md:flex md:gap-4 md:py-4 md:text-xl lg:gap-40 xl:col-span-2 xl:flex xl:justify-start xl:gap-10 xl:font-interSemiBold xl:text-sm'>
          <div className='space-y-2'>
            <li className='flex items-center gap-2'>
              <img src='/svg/check.svg' alt='' />
              Predictive Analytics
            </li>
            <li className='flex items-center gap-2'>
              <img src='/svg/check.svg' alt='' />
              Mobile Accessibility
            </li>
            <li className='flex items-center gap-2'>
              <img src='/svg/check.svg' alt='' />
              Collaborative Features
            </li>
          </div>
          <div className='space-y-2'>
            <li className='flex items-center gap-2'>
              <img src='/svg/check.svg' alt='' />
              Automated Alerts and Notifications
            </li>
            <li className='flex items-center gap-2'>
              <img src='/svg/check.svg' alt='' />
              Feedback Mechanism
            </li>
            <li className='flex items-center gap-2'>
              <img src='/svg/check.svg' alt='' />
              Scalability
            </li>
          </div>
        </ul>
      </div>
      <div className='-mb-5 w-full px-7 md:m-0 md:mx-auto md:w-[65%] xl:-mr-5 xl:w-1/2 xl:p-0'>
        <img className='' src={communicatingWomen} alt='' />
      </div>
    </div>
  )
}

export default function teams() {
  return (
    <div className='flex justify-between px-36'>
      <div className='mt-16 flex w-[55%] flex-col gap-5'>
        <h1 className='pr-72 font-interSemiBold text-3xl'>
          Collaborate with your team anytime, anywhere
        </h1>
        <p className='pr-40'>
          By leveraging advanced tools and technologies, we have developed a
          system that allows educators and administrators to effortlessly access
          and interpret vital insights, empowering them to make informed
          decisions and enhance the overall educational experience for every
          student.
        </p>
        <ul className='col-span-2 flex gap-10 font-interBold'>
          <div className='space-y-2'>
            <li className='flex gap-2'>
              <img src='/svg/check.svg' alt='' />
              Predictive Analytics
            </li>
            <li className='flex gap-2'>
              <img src='/svg/check.svg' alt='' />
              Mobile Accessibility
            </li>
            <li className='flex gap-2'>
              <img src='/svg/check.svg' alt='' />
              Collaborative Features
            </li>
          </div>
          <div className='space-y-2'>
            <li className='flex gap-2'>
              <img src='/svg/check.svg' alt='' />
              Automated Alerts and Notifications
            </li>
            <li className='flex gap-2'>
              <img src='/svg/check.svg' alt='' />
              Feedback Mechanism
            </li>
            <li className='flex gap-2'>
              <img src='/svg/check.svg' alt='' />
              Scalability
            </li>
          </div>
        </ul>
      </div>
      <div className='-mr-8 w-[50%]'>
        <img className='' src='/images/homePage/teams.png' alt='' />
      </div>
    </div>
  )
}

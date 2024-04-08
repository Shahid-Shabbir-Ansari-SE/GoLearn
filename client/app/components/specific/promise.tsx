import { access, profile, scalability } from '~/image'

export default function Promise() {
  return (
    <div
      className={`bg-fill mt-16 flex flex-col items-center justify-center bg-[url('https://i.imgur.com/ne7o8ZF.png')] bg-[length:170vw_100%] bg-center pt-16 text-center text-white md:bg-cover`}
    >
      <h1>Why learn with Golearn</h1>
      <img
        src='/svg/promise.svg'
        className='my-4 px-5 xl:w-[350px] xl:p-0'
        alt=''
      />

      {/*
        Features List:
          1. Real-time Accessibility
          2. Scalability
          3. Profile
      */}
      <div className='my-16 items-center gap-10 xl:flex xl:px-24'>
        <div className='w-full text-center xl:w-1/2 xl:text-left'>
          <ul>
            <li className='justify-center gap-5 px-5 xl:flex xl:h-[128px] xl:p-0'>
              <img className='mx-auto mb-5 size-[88px]' src={access} alt='' />
              <div>
                <h1 className='font-interBold text-2xl'>
                  Real-time Accessibility
                </h1>
                <p>
                  We commit to providing real-time access to student analytics,
                  enabling educators to stay updated on student performance
                  promptly.
                </p>
              </div>
            </li>
            <li className='justify-center gap-5 p-5 xl:flex xl:h-[128px] xl:p-0'>
              <img
                className='mx-auto mb-5 size-[88px]'
                src={scalability}
                alt=''
              />
              <div>
                <h1 className='font-interBold text-2xl'>
                  Real-time Accessibility
                </h1>
                <p>
                  We commit to providing real-time access to student analytics,
                  enabling educators to stay updated on student performance
                  promptly.
                </p>
              </div>
            </li>
            <li className='justify-center gap-5 p-5 xl:flex xl:h-[128px] xl:p-0'>
              <img className='mx-auto mb-5 size-[88px]' src={profile} alt='' />
              <div>
                <h1 className='font-interBold text-2xl'>
                  Real-time Accessibility
                </h1>
                <p>
                  We commit to providing real-time access to student analytics,
                  enabling educators to stay updated on student performance
                  promptly.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className='hidden w-1/2 text-left xl:block'>
          <div className='space-y-5 rounded-[30px] border-[10px] border-[#7E7D7D] border-opacity-20 bg-[#00000033] px-[98px] py-[107px]'>
            <h1 className='font-interSemiBold text-[32px]'>Curriculum</h1>
            <p className='font-interLight leading-[40px]'>
              In our cutting-edge curriculum, we prioritize equipping learners
              with the most relevant and sought-after tech skills. Our
              commitment is to provide a dynamic and comprehensive educational
              experience that aligns with the rapidly evolving demands of the
              technology industry. Here&apos;s an overview of the top tech
              skills incorporated into our curriculum:
            </p>
            <button className='mx-auto flex rounded-[10px] bg-primary px-10 py-2.5'>
              <img src='/svg/bookmark.svg' alt='' />
              View Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

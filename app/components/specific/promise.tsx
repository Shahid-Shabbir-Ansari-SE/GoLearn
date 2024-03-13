export default function Promise() {
  return (
    <div className="bg-fill flex flex-col items-center justify-center bg-[url('/images/homePage/promiseBg.png')] bg-cover pt-16 text-center text-white">
      <h1>Why learn with Golearn</h1>
      <img src='/svg/promise.svg' className='my-4 w-[350px]' alt='' />
      <div className='my-16 flex items-center gap-10 px-24'>
        <div className='w-1/2 text-left'>
          <ul>
            <li className='flex h-[128px] gap-5'>
              <img
                className='size-[88px]'
                src='/images/homePage/access.png'
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
            <li className='flex h-[128px] gap-5'>
              <img
                className='size-[88px]'
                src='/images/homePage/scalability.png'
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
            <li className='flex h-[128px] gap-5'>
              <img
                className='size-[88px]'
                src='/images/homePage/profile.png'
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
          </ul>
        </div>
        <div className='w-1/2 text-left'>
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
            <button className='bg-primary mx-auto flex rounded-[10px] px-10 py-2.5'>
              <img src='/svg/bookmark.svg' alt='' />
              View Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

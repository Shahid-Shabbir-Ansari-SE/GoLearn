import { collabPartners } from '~/image'

export default function Collab() {
  return (
    <div className='mt-4 flex flex-col items-center justify-center gap-5 overflow-hidden px-1 text-center font-interSemiBold text-sm md:gap-12 md:px-32 md:text-2xl'>
      <h1 className='w-[226px] md:w-full'>
        We collaborate with 50+ leading institutions and companies
      </h1>
      <img
        src={collabPartners}
        className='ml-6 scale-[150%] pl-12 md:ml-0 md:scale-[135%] md:px-0 xl:scale-100'
        alt=''
      />
    </div>
  )
}

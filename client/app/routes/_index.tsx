import type { MetaFunction, LinksFunction } from '@remix-run/node'
import Hero from '../components/specific/hero'
import Collab from '../components/specific/collab'
import Skills from '../components/specific/skills'
import Teams from '../components/specific/teams'
import Analytics from '../components/specific/analytics'
import Promise from '../components/specific/promise'
import NewsLetter from '../components/specific/newsLetter'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/png'
    }
  ]
}

export default function Index() {
  return (
    <div>
      <div className='flex flex-col overflow-hidden md:gap-28'>
        <Hero />
        <Collab />
        <Skills />
        <Teams />
        <Analytics />
        <Promise />
        <NewsLetter />
      </div>
      <img
        src='/svg/eclipse.svg'
        className='invisible absolute right-0 top-0 -z-10 size-[368px] md:visible'
        alt=''
      />

      <img
        className='absolute top-[-43px] -z-40 h-[600px] object-cover md:-top-[2px] md:h-[978px] md:w-full'
        src='/images/homePage/rectangle.png'
        alt=''
      />
    </div>
  )
}

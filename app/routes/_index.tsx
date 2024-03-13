import type { MetaFunction, LinksFunction } from '@remix-run/node'
import Navbar from '../components/layout/navBar'
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
      <Navbar />
      <div className='flex flex-col gap-28'>
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
        className='absolute right-0 top-0 -z-10 size-[368px]'
        alt=''
      />

      <img
        className='absolute -top-[2px] -z-40 h-[978px]'
        src='/images/homePage/rectangle.png'
        alt=''
      />
    </div>
  )
}

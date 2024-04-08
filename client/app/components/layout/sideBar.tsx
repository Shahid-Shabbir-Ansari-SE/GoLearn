import { Link, useLocation } from '@remix-run/react'
import React from 'react'
import { svgGenerator } from './svgGenerator'

interface SideLink {
  title: string
  icon: keyof typeof svgGenerator
  link: string
  color: string
}

function Sidebar() {
  const location = useLocation()
  const path = location.pathname

  const sideLinks: SideLink[] = [
    {
      title: 'dashboard',
      icon: 'dashboardSvg',
      link: '/dashboard',
      color: path === '/dashboard' ? 'white' : 'black'
    },
    {
      title: 'courses',
      icon: 'coursesSvg',
      link: '/courses',
      color: path === '/courses' ? 'white' : 'black'
    },
    {
      title: 'wishlist',
      icon: 'wishlistSvg',
      link: '/wishlist',
      color: path === '/wishlist' ? 'white' : 'black'
    },
    {
      title: 'chat',
      icon: 'chatSvg',
      link: '/chat',
      color: path === '/chat' ? 'white' : 'black'
    },
    {
      title: 'settings',
      icon: 'settingsSvg',
      link: '/settings',
      color: path === '/settings' ? 'white' : 'black'
    },
    {
      title: 'calendar',
      icon: 'calendarSvg',
      link: '/calendar',
      color: path === '/calendar' ? 'white' : 'black'
    },
    {
      title: 'analytics',
      icon: 'analyticsSvg',
      link: '/analytics',
      color: path === '/analytics' ? 'white' : 'black'
    }
  ]

  return (
    <aside className='fixed top-0 flex h-screen w-[75px] flex-col items-center border-r'>
      <Link to='/' className='bg-white'>
        <img src='/favicon.svg' alt='' className='my-5 h-[47px] w-[75px]' />
      </Link>
      {sideLinks.map((link, index) => (
        <Link key={index} to={link.link}>
          <figure
            className={`${location.pathname === link.link ? 'bg-primary text-white' : ''} flex size-[75px] flex-col justify-center gap-2 text-center`}
          >
            <div className='flex w-[75px] justify-center'>
              {React.createElement(svgGenerator[link.icon], {
                color: link.color
              })}
            </div>
            <figcaption className='text-[11px] capitalize'>
              {link.title}
            </figcaption>
          </figure>
        </Link>
      ))}
    </aside>
  )
}

export default Sidebar

import type { LinksFunction } from '@remix-run/node'
import stylesheet from '~/tailwind.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import WhichBar from '~/showBar'
import { NextUIProvider } from '@nextui-org/react'

export const links: LinksFunction = () => [
  { rel: 'icon', type: 'image/ico', href: '/favicon.svg' },
  { rel: 'stylesheet', href: stylesheet }
]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <div className='md:m-0'>
            <WhichBar />
          </div>
          <Outlet />
        </NextUIProvider>
      </body>
    </html>
  )
}

import type { LinksFunction } from '@remix-run/node'
import stylesheet from './tailwind.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import NavBar from '~/components/layout/navBar'

export const links: LinksFunction = () => [
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div className='md:mb-[115px]'>
          <NavBar />
        </div>
        <Outlet />
      </body>
    </html>
  )
}

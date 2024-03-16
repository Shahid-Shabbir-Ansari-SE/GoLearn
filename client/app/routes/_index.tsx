import type { MetaFunction, LinksFunction } from '@remix-run/node'

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
  return <div>{process.env.NODE_ENV}</div>
}

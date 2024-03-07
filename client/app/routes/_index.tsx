import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' }
  ]
}

export default function Index() {
  return (
    <div>
      <h1 className='ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md'>
        Welcome to Remix
      </h1>
    </div>
  )
}

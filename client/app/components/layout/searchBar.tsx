import React from 'react'
import { Button } from '@nextui-org/react'

export default function SearchBar({
  setSearchBar,
  handleSearchQuery,
  searchQuery,
  setSearchQuery,
  emptySearchQuery
}: {
  setSearchBar: (value: boolean) => void
  handleSearchQuery: (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => void
  searchQuery: string | undefined
  setSearchQuery: (value: string) => void
  emptySearchQuery: boolean
}) {
  const [searchBarOpen, setSearchBarOpen] = React.useState(false)

  return (
    <>
      <div className='absolute top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-gray-300 bg-opacity-75 backdrop-blur-sm'>
        <button className='absolute right-10 top-5 flex size-9 items-center justify-center bg-white font-arialBold text-4xl'>
          <p className='-mt-1'>x</p>
        </button>
        <div className='flex'>
          <form className='flex space-x-10' onSubmit={handleSearchQuery}>
            <input
              type='text'
              onBlur={
                emptySearchQuery
                  ? () => setSearchBar(false)
                  : () => setSearchBar(true)
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`border-b-2 border-primary bg-transparent
            px-5 py-2 text-xl outline-none transition-all delay-200 duration-1000 ${
              searchBarOpen ? 'w-[500px]' : 'w-0'
            }`}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              onFocus={() => setSearchBarOpen(!searchBarOpen)}
              placeholder='Search for courses ...'
            />
            <Button
              variant='flat'
              onClick={handleSearchQuery}
              className='h-full rounded-none bg-primary px-8 py-2 text-lg text-white'
            >
              Search
            </Button>
          </form>
        </div>
        {emptySearchQuery && searchQuery === '' && (
          <p className='pt-2 text-xs text-red-500'>Please Enter Search Query</p>
        )}
      </div>
    </>
  )
}

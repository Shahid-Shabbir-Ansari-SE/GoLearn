import React from 'react'
import { useNavigate, Link, useLocation } from '@remix-run/react'
import PropTypes from 'prop-types'

export default function NavBar() {
  const [scroll, setScroll] = React.useState(false)
  const [colorBar, setColorBar] = React.useState(false)
  const [showSearchBar, setShowSearchBar] = React.useState(false)
  const location = useLocation()

  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  React.useEffect(() => {
    if (location.pathname === '/') {
      setColorBar(false)
    } else {
      setColorBar(true)
    }
  }, [location])

  const handleNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  React.useEffect(() => {
    handleNavbarColor()
    window.addEventListener('scroll', handleNavbarColor)

    return () => {
      window.removeEventListener('scroll', handleNavbarColor)
    }
  }, [])

  return (
    <div>
      <div
        className={`${scroll ? 'bg-white text-black md:text-white' : 'text-white'} fixed top-0 z-50 flex h-[63px] w-screen items-center justify-between overflow-hidden px-5 font-interSemiBold shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] md:static md:flex ${colorBar ? 'bg-white bg-opacity-50 backdrop-blur-lg xl:h-[70px]' : 'md:shadow-none xl:h-[115px]'}`}
      >
        <div className='flex w-[192px] items-center md:-ml-6 md:h-[115px] xl:-mt-[7px] xl:pl-[22px]'>
          <Link to='/'>
            <img
              className='hidden md:block'
              src={`/${colorBar ? 'colorlogo' : 'logo'}.svg`}
              alt=''
            />
          </Link>
          <h1
            className={`font-arialBold text-3xl md:hidden ${colorBar ? 'text-primary' : ''}`}
          >
            GoLearn
          </h1>
        </div>
        <div className='hidden h-[49px] w-[1281px] xl:flex'>
          <div className='flex w-full items-center justify-center'>
            <ul
              className={`flex gap-[20px] px-5 py-[10px] text-[16px] ${colorBar ? 'text-black' : ''}`}
            >
              <li className='flex cursor-pointer'>
                Home
                <img
                  src={`/svg/${colorBar ? 'darkChevron' : 'chevron'}.svg`}
                  alt=''
                />
              </li>
              <li className='flex cursor-pointer'>
                Products
                <img
                  src={`/svg/${colorBar ? 'darkChevron' : 'chevron'}.svg`}
                  alt=''
                />
              </li>
              <li className='flex cursor-pointer'>
                Curriculum
                <img
                  src={`/svg/${colorBar ? 'darkChevron' : 'chevron'}.svg`}
                  alt=''
                />
              </li>
              <li className='flex cursor-pointer'>
                Solutions
                <img
                  src={`/svg/${colorBar ? 'darkChevron' : 'chevron'}.svg`}
                  alt=''
                />
              </li>
              <li className='flex cursor-pointer'>
                Pricing
                <img
                  src={`/svg/${colorBar ? 'darkChevron' : 'chevron'}.svg`}
                  alt=''
                />
              </li>
              <li className='flex cursor-pointer'>
                Enterprise
                <img
                  src={`/svg/${colorBar ? 'darkChevron' : 'chevron'}.svg`}
                  alt=''
                />
              </li>
            </ul>
          </div>
          <div className={`flex ${colorBar ? 'gap-5' : 'gap-9'} pr-[26px]`}>
            <button className='size-[49px]' onClick={handleSearchBar}>
              <img
                src={`/images/homePage/${colorBar ? 'blackSearch' : 'search'}.png`}
                className='h-[49px]'
                alt=''
              />
            </button>
            <button
              className={`rounded-[10px] bg-white text-primary ${colorBar ? 'w-[95px] border border-primary' : 'w-[83px]'}`}
            >
              Login
            </button>
            <button
              className={`rounded-[10px] ${colorBar ? 'w-[160px] bg-primary text-white' : 'w-[137px] border-[1px] border-white'}`}
            >
              Join for Free
            </button>
          </div>
        </div>
        <div className='mr-0 flex gap-5 md:mr-4 xl:mr-0 xl:hidden'>
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 15.5 3 17.5 3 17.5H21C21 17.5 18 15.5 18 8.5Z'
              stroke={`${scroll || colorBar ? '#623CE7' : '#ffffff'}`}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M13.7295 21.5C13.5537 21.8031 13.3014 22.0547 12.9978 22.2295C12.6941 22.4044 12.3499 22.4965 11.9995 22.4965C11.6492 22.4965 11.3049 22.4044 11.0013 22.2295C10.6977 22.0547 10.4453 21.8031 10.2695 21.5'
              stroke={`${scroll || colorBar ? '#623CE7' : '#ffffff'}`}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20 6.5L10 6.5'
              stroke={`${scroll || colorBar ? '#623CE7' : '#ffffff'}`}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M20 12.5L4 12.5'
              stroke={`${scroll || colorBar ? '#623CE7' : '#ffffff'}`}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M20 18.5H14'
              stroke={`${scroll || colorBar ? '#623CE7' : '#ffffff'}`}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      {colorBar && (
        <img
          className='absolute -right-5 -top-5 -z-10'
          src='/svg/blueEclipse.svg'
          alt=''
        />
      )}
      {showSearchBar && <SearchBar handleSearchBar={handleSearchBar} />}
    </div>
  )
}

export function SearchBar({
  handleSearchBar
}: {
  handleSearchBar: () => void
}) {
  const navigate = useNavigate()
  const [query, setQuery] = React.useState('')

  const handleSearchQuery = () => {
    navigate(`/search/${query}`)
  }

  return (
    <div className='absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center gap-5 bg-gray-100 bg-opacity-80 px-60 text-black'>
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        onBlur={() => {
          setTimeout(() => {
            handleSearchBar()
          }, 200)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearchQuery()
            handleSearchBar()
          }
        }}
        type='text'
        placeholder='Search for courses...'
        className='h-[49px] w-full border-b border-gray-600 bg-transparent px-5 font-interRegular text-xl outline-none'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => {
          handleSearchQuery()
          handleSearchBar()
        }}
        className='h-[49px] bg-black px-10 text-white'
      >
        Search
      </button>
      <button className='absolute right-5 top-5 flex' onClick={handleSearchBar}>
        <svg
          fill='#000000'
          height='20px'
          width='20px'
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 490 490'
        >
          <polygon points='456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 ' />
        </svg>
      </button>
    </div>
  )
}

SearchBar.propTypes = {
  handleSearchBar: PropTypes.func.isRequired
}

import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react'
import { Link, useLocation, useNavigate } from '@remix-run/react'
import SearchBar from './searchBar'
import { useAtom } from 'jotai'
import { loggedIn } from '~/state/store'
import { verifyToken } from '~/utils/auth/verifyToken'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [onHomePage, setOnHomePage] = React.useState<boolean>()
  const [onLoginPage, setOnLoginPage] = React.useState<boolean>()
  const location = useLocation()
  React.useEffect(() => {
    if (location.pathname === '/') {
      setOnHomePage(true)
    } else {
      setOnHomePage(false)
    }
  }, [location.pathname])
  const [loggedInValue, setLoggedIn] = useAtom(loggedIn)

  React.useEffect(() => {
    const isLoginPage = location.pathname === '/login'
    const isRegisterPage = location.pathname === '/register'
    if (isLoginPage || isRegisterPage) {
      setOnLoginPage(true)
    } else {
      setOnLoginPage(false)
    }
    verifyToken().then((res) => {
      if (res.message === 'Access granted!') {
        setLoggedIn(true)
        console.log(res)
      } else {
        setLoggedIn(false)
      }
    })
  }, [location.pathname, setLoggedIn])

  const menuItems = [
    { name: 'Home', path: '/', darkchevron: 'darkChevron', chevron: 'chevron' },
    {
      name: 'Products',
      path: '/products',
      darkchevron: 'darkChevron',
      chevron: 'chevron'
    },
    {
      name: 'Curriculum',
      path: '/curriculum',
      darkchevron: 'darkChevron',
      chevron: 'chevron'
    },
    {
      name: 'Solutions',
      path: '/solutions',
      darkchevron: 'darkChevron',
      chevron: 'chevron'
    },
    {
      name: 'Pricing',
      path: '/pricing',
      darkchevron: 'darkChevron',
      chevron: 'chevron'
    },
    {
      name: 'Enterprise',
      path: '/enterprise',
      darkchevron: 'darkChevron',
      chevron: 'chevron'
    }
  ]
  const [searchBar, setSearchBar] = React.useState(false)
  const handleSearch = () => {
    setSearchBar(!searchBar)
  }
  const [searchQuery, setSearchQuery] = React.useState<string>()
  const navigate = useNavigate()
  const [emptySearchQuery, setEmptySearchQuery] = React.useState(true)

  const handleSearchQuery = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery !== '') {
      navigate(`/search/${searchQuery}`)
      setSearchBar(false)
      setEmptySearchQuery(false)
      setSearchQuery('')
    } else {
      setEmptySearchQuery(true)
      console.log('Please enter a search query')
    }
  }

  return (
    <>
      <Navbar
        shouldHideOnScroll
        maxWidth='full'
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`text-white xl:px-5 ${onHomePage ? 'bg-transparent' : 'bg-primary bg-opacity-90'}`}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='xl:hidden'
          />
          <NavbarBrand>
            <Link to='/'>
              <p className='font-arialBold text-3xl font-bold'>GOLEARN</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden gap-4 xl:flex' justify='center'>
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link to={item.path} className='flex text-white'>
                {item.name}
                <img src={`/svg/${item.chevron}.svg`} alt='' />
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden size-[49px] xl:flex'>
            <button onClick={handleSearch}>
              <img src='/images/homePage/search.png' alt='' />
            </button>
          </NavbarItem>
          {!loggedInValue ? (
            <NavbarItem className='flex gap-4'>
              <Link
                to='/login'
                className={`rounded-lg border-2 border-transparent bg-white px-5 py-1.5 text-primary transition-all duration-200 hover:border-white hover:bg-primary hover:text-white ${onLoginPage ? 'hidden md:block' : 'block'}`}
              >
                Login
              </Link>
              <Link
                to='/register'
                className={`${onHomePage ? '' : 'bg-transparent'} rounded-lg border-2 border-white px-4 py-1.5 text-white transition-all duration-200 hover:bg-white hover:text-primary ${onLoginPage ? 'block' : 'hidden md:flex'}`}
              >
                Sign Up
              </Link>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Link
                to='/dashboard'
                className='rounded-lg border-2 border-transparent bg-white px-5 py-1.5 text-primary transition-all duration-200 hover:border-white hover:bg-primary hover:text-white'
              >
                Dashboard
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarMenu className='py-5 text-center font-interLight'>
          <NavbarMenuItem>
            <form onSubmit={handleSearchQuery} className='flex overflow-hidden'>
              <input
                type='text'
                onBlur={
                  emptySearchQuery
                    ? () => setIsMenuOpen(false)
                    : () => setIsMenuOpen(true)
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full border-b border-primary bg-transparent px-2 py-2 outline-none transition-all delay-200 duration-1000'
                placeholder='Search for courses ...'
              />
              <button
                type='submit'
                onClick={
                  searchQuery !== ''
                    ? () => setIsMenuOpen(false)
                    : () => setIsMenuOpen(true)
                }
              >
                <img
                  className='size-[45px] bg-primary'
                  src='/images/homePage/search.png'
                  alt=''
                />
              </button>
            </form>
            {searchQuery === '' && (
              <p className='pt-2 text-sm text-red-500'>
                Please enter a search query
              </p>
            )}
          </NavbarMenuItem>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className='flex w-full py-2 text-lg' to='#'>
                {item.name}
                <img src={`/svg/${item.darkchevron}.svg`} alt='' />
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {searchBar && (
        <SearchBar
          setSearchBar={setSearchBar}
          handleSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          emptySearchQuery={emptySearchQuery}
        />
      )}
    </>
  )
}

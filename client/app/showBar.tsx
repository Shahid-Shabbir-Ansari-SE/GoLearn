import { useLocation } from '@remix-run/react'
import { useState, useEffect } from 'react'
import NavBar from './components/layout/navBar'
import Sidebar from './components/layout/sideBar'
import DashboardBar from './components/layout/dashboardBar'

const WhichBar = () => {
  const location = useLocation()
  const [whichBar, setWhichBar] = useState<React.ReactNode>(null)
  const path = location.pathname

  useEffect(() => {
    if (
      path === '/dashboard' ||
      path === '/courses' ||
      path === '/wishlist' ||
      path === '/chat' ||
      path === '/settings' ||
      path === '/calendar' ||
      path === '/analytics' ||
      path === '/logout'
    ) {
      setWhichBar(
        <div className='flex'>
          <Sidebar />
          <DashboardBar />
        </div>
      )
    } else {
      setWhichBar(<NavBar />)
    }
  }, [path])

  return whichBar
}

export default WhichBar

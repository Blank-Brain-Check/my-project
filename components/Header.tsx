import { BellIcon, MagnifyingGlassIcon, PowerIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import BasicMenu from './BasicMenu'


function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return ( 
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
    <div className="flex items-center space-x-2 md:space-x-10">
      
       <BasicMenu />

      <ul className="hidden space-x-4 md:flex">
      <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
        <li className="headerLink">Tv Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My list</li>
        
      </ul>
    </div> 

      <div className="flex items-center space-x-4 text-sm font-light">
      <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        
        <BellIcon className="h-6 w-6" /> 
        <Link href="/account">
        <PowerIcon className= "cursor-pointer rounded,h-6 w-6"
             />
        </Link>     
      </div>
    </header>
  )
}
export default Header




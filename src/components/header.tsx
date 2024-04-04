import headerIcon from '../assets/header-logo.svg'
import { NavLink } from './nav-link'

export function Header() {
   return (
      <header className='flex items-center gap-5 py-2'>
         <img src={headerIcon} alt="Site logo" />
         <nav className='flex items-center gap-5'>
            <NavLink href='/events'> Events</NavLink>
            <NavLink href='/participants'> Participants</NavLink>
         </nav>
      </header>)
}
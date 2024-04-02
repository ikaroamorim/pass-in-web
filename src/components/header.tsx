import headerIcon from '../assets/header-logo.svg'

export function Header() {
   return (
      <header className='flex items-center gap-5 py-2'>
         <img src={headerIcon} alt="Site logo" />
         <nav className='flex items-center gap-5'>
            <a href="#"  className='font-medium text-sm text-zinc-400'>Events</a>
            <a href="#" className='font-medium text-sm'>Participants</a>
         </nav>
      </header>)
}
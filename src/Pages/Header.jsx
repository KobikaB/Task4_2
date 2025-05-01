import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='w-full h-20 bg-gray-500 flex justify-end-safe p-3 items-center'>
    
        <ul className='flex gap-6'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <div className='flex justify-center items-end  gap-6'>
            <li><Link to={'/login'} className='bg-white text-black rounded-2xl p-3 '>Login</Link></li>
            <li><Link to={'/register'} className='bg-white text-black rounded-2xl p-3'>Register</Link></li>
            </div>
            
        </ul>
     </div>

    
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='w-full h-20  bg-gray-500 '>
    
        <ul>
          <div  className=' flex justify-end items-center gap-6 mt-6 p-2'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/login'} className='bg-white text-black rounded-2xl p-3 '>Login</Link></li>
            <li><Link to={'/register'} className='bg-white text-black rounded-2xl p-3'>Register</Link></li>
            </div>
            
        </ul>
     </div>

    
  )
}

export default Header
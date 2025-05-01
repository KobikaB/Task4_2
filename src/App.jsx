import React from 'react'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className=' w-screen h-screen text-white  bg-cover bg-center' style={{backgroundImage:"url('Images/bg_im1.jpg')" }}>
      <div className='' >
       <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Home />}/>

       </Routes>
       </div>
    </div>
   
  )
}

export default App
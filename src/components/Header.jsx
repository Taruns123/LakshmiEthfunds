import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import logo from './../images/logo.jpg'
import { newLogo } from '../assets'
import {Link,NavLink} from "react-router-dom"
// import  img1 from './../images/bgimage.jpg'


const Navbar = () => {
  const [nav,setNav]= useState(false)
const handleNav = () => {
  setNav(!nav)
}
  return (
    <div className='flex justify-between items-center w-screen h-16 px-20   text-white ' style={{ backgroundImage: `url(${newLogo})` }}>
      <p className='text-green-400 font-bold text-2xl mt-2 mx-2'>Nature Solmate</p>
      {/* <img className=' w-200 h-[45px]' src={logo} alt="/" /> */}
        {/* <h1 className='w-full px-4 text-3xl font-bold'>Sahayata</h1> */}
        <ul className='hidden md:flex uppercase mt-3'>
          {/* <li className='hover:bg-yellow-400 cursor-pointer rounded p-2'> */}
          {/* <Link to="/home" class="nav-link active">Home</Link> </li> */}
          {/* <li className='p-2 hover:bg-yellow-400 cursor-pointer rounded'><Link to="/coursecat" class="nav-link active">Courses</Link> </li> */}
          {/* <li className='p-2 hover:bg-yellow-400 cursor-pointer rounded'>Courses</li> */}
          
          <li className='p-2 bg-green-400 cursor-pointer text-black text-md font-semibold rounded-lg'><Link to="/ngoenroll" class="nav-link active"> Wallet</Link> </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }          
        </div>
        
    </div>
  )
}

export default Navbar

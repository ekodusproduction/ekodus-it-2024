import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/assets/Ekodus_logoinc.png'
import Button from './Button'

const Navbar = () => {
  return (
    <div>
        <div className='text-white flex gap-8 py-4'>
            <p>info@ekodus.com</p>
            <p>+91 9678874553</p>
        </div>
    <div className='bg-[linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2))] py-6 px-8 flex items-center justify-between '>
        <div>
            <img className='w-52' src={logo} alt="" />
        </div>
        <ul className='flex gap-8 text-white items-center'>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Services</a></li>
            <li><a href="">Our Products</a></li>
            <li><a href="">Insights</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Career</a></li>
            <li><Button title='Contact Us'/></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
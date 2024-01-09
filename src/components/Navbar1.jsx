import React, { useEffect, useState } from 'react'
import '../components/Navbar1.css'
import { SlArrowRight } from "react-icons/sl";
import logo1 from '/assets/EKODUS FINAL LOGO.png'
import logo2 from '/assets/EKODUS FINAL LOGO2.png'
import { IoMdMenu } from "react-icons/io";
// import Button from './Button';
 const Navbar1 = () => {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if(scrollTop>50){
        setColorChange(true);
      } 
      else{
        setColorChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  // };


  }, [setColorChange]);

  return (
    <div className={`container1 ${colorChange ? 'scrolled' : 'unscrolled'}`}>
        <div className='item-1'> 
            {colorChange? <img src={logo1} alt="..." /> : <img src={logo2} alt="..." />}
        </div>
        <div className="item-2">
            <ul>
                <li><a href="#">About Us</a>
                </li>
                <li><a href="#">Our Services</a></li>
                <li><a href="">Our Products</a></li>
                <li><a href="">Insights</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Career</a></li>
                <li><button type="button"><SlArrowRight/> Contact Us</button></li>
                {/* <li><Button title='Contact Us'/></li> */}
            </ul>
        </div>
        <div className='item-3'><IoMdMenu/></div>
    </div>
  )
}

export default Navbar1
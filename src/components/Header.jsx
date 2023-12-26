import React,{useState, useEffect} from 'react'
import styles from './Header.module.css'
import Navbar from './Navbar'
import Button from './Button'
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);
  return (
    <div className={`${styles.header} px-20 relative`}>
        <Navbar/>
        <div className='text-white flex flex-col h-[70%] justify-center gap-8'  data-aos="fade-right" data-aos-once={true}>
            <h2 className='font-bold text-7xl leading-[5rem] '><span className={styles.headerTextAnimation}>Confidently</span> <span className={styles.headerTextAnimation}>plan</span>,<br /> <span className={styles.headerTextAnimation}>design</span> <span className={styles.headerTextAnimation}>and</span>  <span className={styles.headerTextAnimation}>build</span> <br /> <span className={styles.headerTextAnimation}>for</span> <span className={styles.headerTextAnimation}>tomorrow</span> </h2>
            <p className='font-semibold'>Get your digital transformation done right by empowering your people,<br /> designing efficient processes and choosing the right technology.</p>
            <div className='flex gap-4'>
                <Button title='Our Services'/>
                <button className='border px-6 py-[10px] hover:bg-[rgba(255,255,255,0.2)] '>Ask an Expert</button>
            </div>
        </div>

        
    </div>
  )
}

export default Header
import React,{useState, useEffect} from 'react'
import Header from '../components/Header'
import {BsArrowUpRight} from 'react-icons/bs'
import styles from './Home.module.css'
import Button from '../components/Button'
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  },[]);
  const [selectedDepartment, setSelectedDepartment] = useState('design');
  const [selectedWhyChooseUs, setselectedWhyChooseUs] = useState('a');

  const openDept = (dept) => {
    setSelectedDepartment(dept);
  };
  const openWhyChooseUs = (point) => {
    setselectedWhyChooseUs(point);
  };
  return (
    <>
      <Header/>
      <div className='mt-20 flex justify-center  gap-24 overflow-hidden'>
          <div className="tab flex flex-col items-start gap-2" data-aos="fade-right" data-aos-once={true}>
                <button
              className={`tablinks ${selectedDepartment === 'design' ? `${styles.deptactive}` : ''} font-bold text-[2.7rem] text-[rgba(0,0,0,0.9)] ${styles.deptMenuItem}`}
              onClick={() => openDept('design')}
            >
              Evalutation & Design
            </button>
            <button
              className={`tablinks ${selectedDepartment === 'software' ? `${styles.deptactive}` : ''} font-bold text-[2.7rem] text-[rgba(0,0,0,0.9)] ${styles.deptMenuItem}`}
              onClick={() => openDept('software')}
            >
             Custom Software
            </button>
            <button
              className={`tablinks ${selectedDepartment === 'web' ? `${styles.deptactive}` : ''} font-bold text-[2.7rem] text-[rgba(0,0,0,0.9)] ${styles.deptMenuItem}`}
              onClick={() => openDept('design')}
            >
              Web Development
            </button>
            <button
              className={`tablinks ${selectedDepartment === 'mobile' ? `${styles.deptactive}` : ''} font-bold text-[2.7rem] text-[rgba(0,0,0,0.9)] ${styles.deptMenuItem}`}
              onClick={() => openDept('design')}
            >
              Mobile Development
            </button>
            <button
              className={`tablinks ${selectedDepartment === 'support' ? `${styles.deptactive}` : ''} font-bold text-[2.7rem] text-[rgba(0,0,0,0.9)] ${styles.deptMenuItem}`}
              onClick={() => openDept('design')}
            >
             Maintainanace & Support
            </button>
            <button
              className={`tablinks ${selectedDepartment === 'digitalmarketing' ? `${styles.deptactive}` : ''} font-bold text-[2.7rem] text-[rgba(0,0,0,0.9)] ${styles.deptMenuItem}`}
              onClick={() => openDept('design')}
            >
             Digital Marketing
            </button>
            <button
              className={`tablinks ${selectedDepartment === 'staffing' ? `${styles.deptactive}` : ''} font-bold text-[2.7rem] text-[rgba(0,0,0,0.9)] ${styles.deptMenuItem}`}
              onClick={() => openDept('design')}
            >
             IT Staffing
            </button>
          </div>
          <div className="tab-content border rounded-xl h-fit" data-aos="fade-left" data-aos-once={true}>
            {selectedDepartment === 'design' && 
            <div className='w-[45vw] flex flex-col gap-4'>
              <div className='flex flex-wrap gap-4 m-4'>
                  <div className='border rounded-lg p-[3px]'>
                    <p className='text-[10px] font-bold text-[rgba(0,0,0,0.8)]'>RESEARCH & DEVELOPMENT</p>
                  </div>
                  <div className='border rounded-lg p-[3px]'>
                    <p className='text-[10px] font-bold text-[rgba(0,0,0,0.8)]'>SCOPING SESSION</p>
                  </div>
                  <div className='border rounded-lg p-[3px]'>
                    <p className='text-[10px] font-bold text-[rgba(0,0,0,0.8)]'>UI REVIEW</p>
                  </div>
                  <div className='border rounded-lg p-[3px]'>
                    <p className='text-[10px] font-bold text-[rgba(0,0,0,0.8)]'>UI DESIGN</p>
                  </div>
                  <div className='border rounded-lg p-[3px]'>
                    <p className='text-[10px] font-bold text-[rgba(0,0,0,0.8)]'>BRANDING</p>
                  </div>
                  <div className='border rounded-lg p-[3px]'>
                    <p className='text-[10px] font-bold text-[rgba(0,0,0,0.8)]'>PRODUCT DESIGN</p>
                  </div>
                  <div className='border rounded-lg p-[3px]'>
                    <p className='text-[10px] font-bold text-[rgba(0,0,0,0.8)]'>RAPID PROTOTPING</p>
                  </div>
              </div>
              <div className='mx-4'>
                <p className='text-slate-500 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore pariatur eaque doloremque dolor nam enim sunt suscipit incidunt maiores corporis? Rem nobis at voluptatum nihil quam id sit dolores tempora vero beatae deleniti, quos eos neque vel corporis? Explicabo, harum.</p>
              </div>
              <div>
                <button className='flex gap-4 items-center mx-4 text-[10px] font-bold'>
                  LEARN MORE
                  <div className='p-2 border rounded-[50%] border-[#f55b2c] '>
                    <BsArrowUpRight/>
                  </div>
                </button>
              </div>

              <div className='bg-[#f55b2c] mt-32 rounded-b-xl flex justify-center'>
                <img src="/assets/Home/laptop.png" className={`w-[400px] mt-[-100px] ${styles.laptopAnimation}`} alt="" />
              </div>

            </div>}
            {selectedDepartment === 'software' && <p>Ritu</p>}
          
          </div>
        </div>


        <div className='flex gap-16 items-center pl-20 pr-6 pt-8 mt-16 bg-[#ccdce6] overflow-hidden'>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={0}>
              <h3 className='text-4xl font-bold w-[20ch]'>We combine design,
                development, business
                process and data insights
                to accelerate digital
                transformations</h3>
            </div>
            <div className='flex flex-col gap-2 pb-8' data-aos="fade-up" data-aos-once={true} data-aos-delay={300}>
              <h3 className='font-bold text-7xl text-[blue] ml-[-10px]'>15</h3>
              <p className='text-sm font-bold'>Experienced IT experts</p>
              <p className='font-semibold text-sm w-[25ch]'>we have established a strong
              foundation from which we
              deliver our promise.</p>

              <h3 className='mt-4 font-bold text-xl'>24/7 Consultation & Support</h3>
              <p className='font-semibold text-sm w-[30ch]'>Solve complex problem into better customer experiences</p>
              <Button title={'Book your Consultation'}/>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={600} >
              <img src="/assets/Home/image2.png" className={`w-[380px] ${styles.robot}`} alt="" />
            </div>
        </div>


        <div className={` ${styles.whychooseus} pt-16 overflow-hidden`}>
            <h2 className='text-center text-white font-semibold text-4xl mb-16' data-aos="fade-right" data-aos-once={true} data-aos-delay={0}>5 Reasons to Choose Us</h2>

            <div className="tab-content">
            {selectedWhyChooseUs === 'a' && 
            <div className='flex flex-col items-center jus gap-4 mb-28'>
              <h3 className='text-white font-bold text-4xl text-center mb-4' data-aos="fade-left" data-aos-once={true} data-aos-delay={300}>Strategic business assessment to capture <br /> clients’ goals and outcomes.</h3>
              <p className='text-white text-center font-semibold text-lg w-[80ch]' data-aos="fade-right" data-aos-once={true} data-aos-delay={600}>A strategic business assessment is a critical process for understanding your clients' goals and desired outcomes.</p>
            </div>}
            {selectedWhyChooseUs === 'b' && <p>Ritu</p>}
          
          </div>
          <div className="tab flex justify-center gap-4 mx-8">
                <button
              className={`tablinks ${selectedWhyChooseUs === 'a' ? `${styles.whychooseusactive}` : ''} text-white font-bold text-xl py-4 `}
              onClick={() => openWhyChooseUs('a')}
              data-aos="fade-up" data-aos-once={true} data-aos-delay={800}
            >
              Strategic business assessment
            </button>
            <button
              className={`tablinks ${selectedWhyChooseUs === 'b' ? `${styles.whychooseusactive}` : ''} text-white font-bold text-xl`}
              onClick={() => openWhyChooseUs('b')}
              data-aos="fade-up" data-aos-once={true} data-aos-delay={1000}
            >
              Customized digital strategy
            </button>
            <button
              className={`tablinks ${selectedWhyChooseUs === 'b' ? `${styles.whychooseusactive}` : ''} text-white font-bold text-xl `}
              onClick={() => openWhyChooseUs('b')}
              data-aos="fade-up" data-aos-once={true} data-aos-delay={1200}
            >
              Customized digital strategy
            </button>
            <button
              className={`tablinks ${selectedWhyChooseUs === 'b' ? `${styles.whychooseusactive}` : ''} text-white font-bold text-xl `}
              onClick={() => openWhyChooseUs('b')}
              data-aos="fade-up" data-aos-once={true} data-aos-delay={1400}
            >
              Customized digital strategy
            </button>
            <button
              className={`tablinks ${selectedWhyChooseUs === 'b' ? `${styles.whychooseusactive}` : ''} text-white font-bold text-xl`}
              onClick={() => openWhyChooseUs('b')}
              data-aos="fade-up" data-aos-once={true} data-aos-delay={1600}
            >
              Customized digital strategy
            </button>
           
          </div>
        </div>

        <div className='bg-[#fff2f2] py-16'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='font-bold text-4xl'>Industries We Serve</h2>
            <p className='w-[80ch] text-xl mt-4'>With our expertise in quickly understanding the industry requirements, we offer our services to all the industries and business sectors worldwide with customised solutions to get the best results. We provide our services to every business, irrespective of the industry.</p>
          </div>
          <div className='grid grid-cols-6 gap-x-4 gap-y-12 mt-16 mx-24'>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={100}>
              <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image4.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={200}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image5.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold  mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={300}>
              <div className='p-2 shadow-xl overflow-hidden'>
                  <img src="/assets/Home/image6.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
                </div>
              <p className='text-center text-lg font-bold  mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={400}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image7.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={500}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image8.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={600}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image9.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={700}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image10.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={800}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image11.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={900}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image12.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={1000}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image13.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={1100}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image14.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
            <div data-aos="fade-up" data-aos-once={true} data-aos-delay={1200}>
            <div className='p-2 shadow-xl overflow-hidden'>
                <img src="/assets/Home/image15.jpg" className={`h-[160px] object-cover ${styles.imageAnimation}`} alt="" />
              </div>
              <p className='text-center text-lg font-bold mt-4'>EDUCATION</p>
            </div>
          </div>
        </div>
   </>
   
  )
}

export default Home
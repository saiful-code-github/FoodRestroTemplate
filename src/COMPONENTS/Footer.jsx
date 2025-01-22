import { useEffect, useState } from 'react';
import '../app.css';
import { CCol, CContainer, CRow } from '@coreui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import bgimg from '../assets/Images/contact.jpg';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () =>{
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
  };

  useEffect(()=>{
    const scrollToBottom = () =>{
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
      window.addEventListener('scroll', scrollToBottom);
      return () => {
        window.removeEventListener('scroll', scrollToBottom);
      };
  },[])

  return (
    <>
       <footer  className='pt-[20px]' style={{background: `url(${bgimg})`,backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <CContainer>
            <CRow>
               <CCol lg={3} md={4} sm={6} className='w-full sm:w-[50%] md:w-[25%] block mx-auto md:mx-0 md:inline-block' >
                   <div>
                      <h2>Location
                      </h2>
                      <ul>
                        <li> 
                          <p>5205 Waterford Distict</p>
                          <p>5205 Waterford Distict</p>
                          <p>5205 Waterford Distict</p>
                        </li>
                      </ul>
                   </div>
               </CCol>
               <CCol lg={3} md={4} sm={6} className='w-full sm:w-[50%] md:w-[25%] block mx-auto md:mx-0 md:inline-block' >
                   <div>
                      <h2>working Hours
                      </h2>
                      <ul>
                        <li> 
                          <p>Mon_Fri: 9.00AM - 10.00PM</p>
                          <p>Mon_Fri: 9.00AM - 10.00PM</p>
                          <p>Mon_Fri: 9.00AM - 10.00PM</p>
                        </li>
                      </ul>
                   </div>
               </CCol>
               <CCol lg={3} md={4} sm={6} className='w-full sm:w-[50%] md:w-[25%] block mx-auto md:mx-0 md:inline-block' >
                   <div>
                      <h2>Order Now
                      </h2>
                      <ul>
                        <li> 
                          <p>Quaeratr neque purus ipsum</p>
                        </li>
                      </ul>
                       <h6><Link to="tel:999-888-777">999-888-777</Link></h6>
                   </div>
               </CCol>
               <CCol lg={3} md={4} sm={6} className='w-full sm:w-[50%] md:w-[25%] block mx-auto md:mx-0 md:inline-block'>
                    <h2>Follow Us
                    </h2>
                    <ul>
                       <li>
                        <p>Quaeratr neque purus ipsum</p>
                       </li>
                    </ul>
                    <ul className='flex justify-center align-middle'>
                       <li>
                        <Link><FontAwesomeIcon icon={faFacebook}/></Link>
                       </li>
                       <li>
                        <Link><FontAwesomeIcon icon={faTwitter}/></Link>
                       </li>
                       <li>
                        <Link><FontAwesomeIcon icon={faInstagram}/></Link>
                       </li>
                       <li>
                        <Link><FontAwesomeIcon icon={faLinkedin}/></Link>
                       </li>
                    </ul>
               </CCol>
            </CRow>
             <hr />
            {/* bottom-footer */}
            <div className='flex md:flex justify-center flex-col md:flex-row align-middle text-center bottom-footer'>
            <div>
               <p className='text-[18px]'>@ 2024 <b className='capitalize text-[var(--bg-color)]'>new webdesigner</b>. All Rights Reserved.</p>
            </div>
            <ul className='flex'>
               <li className=' hidden md:inline-block'>|</li>
               <li>
                <Link to="/about">About Us</Link>
               </li>
               <li className=' hidden md:inline-block'>|</li>
               <li>
                <Link to="/tou">Terms Of Use</Link>
               </li>
               <li className=' hidden md:inline-block'>|</li>
               <li>
                <Link to="/pp">Privacy Policy</Link>
               </li>
            </ul>
        </div>
        </CContainer>
         {/* scroll to top bottom */}
    {isVisible && ( <div className='scroll_top' onClick={scrollTop}>
      <i className='bi bi-arrow-up'></i>
      </div>
      )};
    </footer>
    </>
  )
}

export default Footer;
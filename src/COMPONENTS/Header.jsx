import React, { useEffect, useState } from 'react';
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
} from '@coreui/react';
import logo from '../assets/Images/logo.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const [nav, setNav] = useState(false);

  const changeScrollValue = () =>{
    if(window.scrollY > 100) {
      setNav(true)
    }else{
      setNav(false)
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll',changeScrollValue);
    return () => window.removeEventListener('scroll', changeScrollValue)
  },)

  //active link
  const linkStyle = ({isActive}) => ({
    color: isActive ? "var(--yellow)" :  "#FFF",
    fontFamily: 'var(--oswald-font)'
  })
  return (
    <header>
  <CNavbar expand="lg" className={` md:bg-transparent lg:bg-transparent ${nav === true ? `sticky shadow-lg pb-2` : ""}`}>
      <CContainer>
        <NavLink to="/"><img src={logo} alt="" className='w-[120px]'/></NavLink>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse mt-[10ox]" visible={visible}>
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <NavLink to="/" style={linkStyle} className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold uppercase">
                Home
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/about" style={linkStyle} className="text-[16px] md:text-[18px] lg:text-[18px]  font-semibold uppercase"> About</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/our-menu" style={linkStyle} className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold uppercase">Oour Menu</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/shop" style={linkStyle} className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold uppercase">Shop</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/blog" style={linkStyle} className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold uppercase">Blog</NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/contact" style={linkStyle} className="text-[16px] md:text-[18px] lg:text-[18px] font-semibold uppercase">Conatct</NavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    </header>
  )
}

import React from 'react'
import { CCarousel, CCarouselCaption, CCarouselItem, CCol, CImage, CRow } from '@coreui/react';
import bannerimg from '/src/assets/Images/burger.png';
import { Button } from './Button';
import pricimg from '/src/assets/Images/price_badge.png'

export const CarouselWithCaptionsExample = () => {
    const mockData = [
        {
            text: "Only",
            Rupes: 6.99,
            image: bannerimg,
            title: "New Burger",
            subtitle: "With Onion",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda corporis esse hic cumque corrupti quia adipisci voluptatum voluptates? Veniam dicta hic dignissimos culpa at?"
        },
        {
            text: "Only",
            Rupes: 6.99,
            image: bannerimg,
            title: "New Burger",
            subtitle: "With Onion",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda corporis esse hic cumque corrupti quia adipisci voluptatum voluptates? Veniam dicta hic dignissimos culpa at?"
        },
        {
            text: "Only",
            Rupes: 6.99,
            image: bannerimg,
            title: "New Burger",
            subtitle: "With Onion",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda corporis esse hic cumque corrupti quia adipisci voluptatum voluptates? Veniam dicta hic dignissimos culpa at?"
        }
    ]
  return (
    <section className='relative bg-[var(--bg-color)] pt-[0] md:pt-[0] lg:pt-[0] pb-[50px]'>
      <CCarousel controls indicators>
    {mockData.map((item, index)=> {
        const {text, Rupes, image, title, subtitle, para} = item;
        return (
       <CCarouselItem key={index}>
        <CRow className='pt-[140px]'>
             <CCol lg={6}>
               <div className='ml-[0] md:ml-[130px] lg:ml-[130px] relative'>
               <CImage className="d-block w-100 relative z-30" src={image} alt="slide 1"   />
               <div className='absolute top-[-39px] right-[-69px] md:right-[-110px]  pt-[49px] md:pt-[39px] z-30' style={{background: `url(${pricimg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "40%", width: "75%", height: "170px", objectFit: "cover", textAlign: "center"}}>
                  <h4 className='text-[1.25rem] md:text-[1.85rem] mb-[0] md:mb-[-3px] lg:text-[1.8rem] uppercase text-black font-semibold' style={{fontFamily: "var(--oswald-font)"}}>{text}</h4>
                  <h6 className='text-[2rem] md:text-[2.87rem] lg:text-[2.87rem] uppercase font-semibold text-black' style={{fontFamily: "var(--oswald-font)"}}>${Rupes}</h6>
               </div>
               </div>
             </CCol>
             <CCol lg={6}>
             <CCarouselCaption className="block m-auto text-center">
             <h1 className='text-[4rem] md:text-[5rem] lg:text-[7rem] uppercase font-normal leading-none md:leading-[110px] lg:leading-[100px]' style={{fontFamily: "var(--lilita-font)"}}>{title}</h1>
             <h3 className='text-[1.5rem] md:text-[2.2rem] lg:text-[2.5rem] font-normal uppercase tracking-widest' style={{fontFamily: "var(--lilita-font)"}}>{subtitle}</h3>
             <p className='text-[16px]'>{para}</p>
             <Button name="Order Now" className="uppercase text-black hover:bg-white mt-2 inline-block" style={{color: "red"}}/>
            </CCarouselCaption>
             </CCol>
        </CRow>
      </CCarouselItem>
        )
    })}
    </CCarousel>
    </section>
  )
}

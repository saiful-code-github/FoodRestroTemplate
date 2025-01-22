import { CContainer } from "@coreui/react";
import React from "react";
import Slider from "react-slick";
import img1 from '../assets/Images/testamonial1.jpg';
import img2 from '../assets/Images/testamonial2.jpg';
import img3 from '../assets/Images/testamonial3.jpg';
import bgimg from '../assets/Images/clientBanner.jpg';

function HomeSec9() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
//   mockData
const mockData = [
    {
        image: img1,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!",
        rating: 4.5,
        name: "BY JHON NEWLOVE"
    },
    {
        image: img2,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!",
        rating: 3.5,
        name: "BY JHON NEWLOVE"
    },
    {
        image: img3,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!",
        rating: 2,
        name: "BY JHON NEWLOVE"
    }
]

// renderrating 
const renderRating = (rating) =>{
    let stars = [];
    for (let i = 0; i < 5; i++) {
        if(rating > 0.5) {
            stars.push(<i key={i} className="bi bi-star-fill"/>);
            rating--;
        }else if (rating > 0 ) {
            stars.push(<i key={i} className="bi bi-star-half"/>);
            rating--;
        }else{
            stars.push(<i key={i} className="bi bi-star"/>)
        }
    }
    return stars;
}
  return (
    <section className="py-[100px]" style={{background: `url(${bgimg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
        <CContainer>
        <div className="slider-container">
      <Slider {...settings}>
        {mockData.map((item, index)=>{
            const {image, para, rating, name} = item;
            return (
                <div key={index} className="text-white flex flex-col justify-center align-middle text-center">
                <img src={image} alt="" className="w-[100px] h-[100px] object-cover block mx-auto rounded-full"/>
                <p className="leading-6 mt-[25px] text-[16px] md:w-[60%] block mx-auto">{para}</p>
                <div className="text-[var(--yellow)] mb-3">
                 {renderRating(rating)}
                </div>
                <h6 className="font-medium uppercase" style={{fontFamily: "vr(--oswald-font)"}}>{name}
                </h6>
             </div>
            )
        })}
      </Slider>
       </div>
        </CContainer>
    </section>
  );
}

export default HomeSec9;

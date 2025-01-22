import Slider from "react-slick";
import { useState, useEffect } from "react";
// all images
import img1 from '../assets/Images/12.png';
import img2 from '../assets/Images/13.png';
import img3 from '../assets/Images/14.png';
import img4 from '../assets/Images/15.png';
import img5 from '../assets/Images/16.png';
import img6 from '../assets/Images/17.png';
import img7 from '../assets/Images/18.png';
import img8 from '../assets/Images/19.png';
import { CContainer } from "@coreui/react";

function HomeSec8() {
    const [slider, setSlider] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    nav:false,
    autoplay:true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
//   mockData 
const mockData = [
    {
       image: img1
    },
    {
        image: img2
     },
     {
        image: img3
     },
     {
        image: img4
     },
     {
        image: img5
     },
     {
        image: img6
     },
     {
        image: img7
     },
     {
        image: img8
     },
     {
        image: img1
     },
     {
        image: img2
     },
     {
        image: img3
     },
      {
        image: img4
     }
]

useEffect(()=>{
    setSlider(mockData);
},[])

  return (
    <section className="py-[40px]">
        <CContainer>
        <div className="slider-container">
      <Slider {...settings}>
        {
            slider.map((item, index)=>{
                const {image} = item;
                return (
                    <div key={index} className="flex justify-center align-middle">
                       <img src={image} alt="" className="w-[100%] h-[100px] object-contain"/>
                    </div>
                )
            })
        }
      </Slider>
    </div>
        </CContainer>
    </section>
  );
}

export default HomeSec8;

import { CCol, CContainer, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import img1 from '/src/assets/Images/pizaa.png';
import img2 from '/src/assets/Images/salad.png';
import img3 from '/src/assets/Images/delivery_boy.png';

export const HomeSec3 = () =>{
    const [data, setData] = useState([]);
    const mockData = [
        {
            image:img1,
            name: "Original",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam delectus iure, repudiandae dicta et?" 
        },
        {
            image:img2,
            name: "Quality Foods",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam delectus iure, repudiandae dicta et?" 
        },
        {
            image:img3,
            name: "Faster Delivery",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam delectus iure, repudiandae dicta et?" 
        }
    ]
    useEffect(()=>{
       setData(mockData);  
    },[])
    return (
         <section className="bg-[var(--yellow)] py-[30px]">
              <CContainer>
                  <CRow>
                   {data.map((item, index)=>{
                    const {image, name, para} = item;
                    return (
                      <CCol lg={4} key={index} className="w-full block mx-auto sm:w-[50%] md:w-auto text-center">
                          <div>
                              <img src={image} alt="" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] block object-contain m-auto"/>
                              <h2 className="text-[20px] md:text-[26px] font-medium" style={{fontFamily: "var(--oswald-font)"}}>{name}</h2>
                              <p className="text-[16px] font-normal text-[var(--black)] leading-6 w-full md:w-[85%] m-auto">{para}</p>
                          </div>
                      </CCol>
                    )
                   })}
                  </CRow>
              </CContainer>
         </section>
    )
}
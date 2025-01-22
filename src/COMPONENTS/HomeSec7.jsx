import { CCol, CContainer, CRow } from "@coreui/react";
import img1 from '../assets/Images/Android.png';
import img2 from '../assets/Images/IOS.png';
import img3 from '../assets/Images/burgerShop.png';
export const HomeSec7 = () =>{
    const mockData = [
        {
          image: img1,
          image2: img2,
          subtitle: 'Download mobile App and',
          title: 'save up to 20%',
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam possimus non minima quaerat animi accusamus voluptates ea asperiores perspiciatis."
        }
    ]
    return (
        <section className="bg-[var(--yellow)] pt-[40px] pb-[20px]">
              <CContainer>
                  <CRow>
                    {mockData.map((item, index) =>{
                        const {image, image2, subtitle, title, para} = item;
                        return (
                            <CCol lg={6} key={index}>
                                <div className="flex flex-col md:text-left justify-center md:block mt-[0] md:mt-8">
                                   <h3 className="text-[1.8rem] md:text-[2.3rem] font-medium uppercase text-[#642f21]">{subtitle}</h3>
                                   <h2 className="text-[2rem] md:text-[4rem] font-semibold capitalize text-[#642f21]" style={{fontFamily: 'var(--lilita-font)'}}>{title}</h2>
                                   <p className="text-[16px] md:text-[1.2rem] text-[#642f21] font-normal pb-[0] md:pb-[20px] block">{para}</p>
                                   <div className="flex flex-row">
                                        <img src={image} alt="" className="mr-[0] md:mr-[0] w-[50%] md:w-[43%] block md:inline-block" />
                                        <img src={image2} alt="" className="mr-[0] md:mr-[10px] w-[50%] md:w-[43%] block mx-auto md:mx-0"/>
                                   </div>
                                </div>
                            </CCol>
                        )
                    })}
                     <CCol lg={6}>
                         <img src={img3} alt="" />
                     </CCol>
                  </CRow>
              </CContainer>
        </section>
    )
}
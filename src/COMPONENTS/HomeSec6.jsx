import { CCol, CContainer, CRow } from "@coreui/react";
import img1 from '../assets/Images/pro.png';

export const HomeSec6 = () => {
    return (
        <>
        <section className="bg-[#f6f9fa] py-[40px] mt-[80px]">
              <CContainer>
                  <CRow>
                      <CCol lg={6}>
                          <div>
                              <img src={img1} alt="" className="w-full"/>
                          </div>
                      </CCol>
                      <CCol lg={6}>
                         <div className="pl-[0] md:pl-[40px] mt-[0] md:mt-[30px]">
                            <h3 className="text-[1.8rem] leading-9 pb-[20px] md:text-[3rem] md:leading-[54px] font-normal uppercase" style={{fontFamily: "vr(--oswald-font)"}}>Noting brings people together like a good burger
                            </h3>
                            <p className="text-[16px] leading-6 md:text-[18px] md:leading-8 font-medium text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, vitae atque totam possimus ex. Ut est magni molestias. Velit asperiores repellat nihil. Fugit quas, autem alias ipsam blanditiis necessitatibus.<br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci molestiae illum esse delectus minima.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quia.<br/>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci molestiae illum esse delectus minima.
                            </p>
                         </div>
                      </CCol>
                  </CRow>
              </CContainer>
        </section>
          {/* BG Parallax Scroll */}
          <div className="bg_parallax"> 
                  
          </div>
          </>
    )
}
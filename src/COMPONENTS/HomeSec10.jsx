import { CCol, CContainer, CRow } from "@coreui/react"
import { Button } from "./HomeSec/Button";

export const HomeSec10 = () =>{
    const mockData = [
        {
            title: "30 Minutes Delivery!",
            subtitle: "30 Minutes Delivery!",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorum velit maxime, omnis ab id voluptate! Asperiores, nobis animi. Fugiat."
        }
    ]
    return (
       <section className="py-[30px] text-center">
          <CContainer>
                <CRow>
                    {mockData.map((item, index) =>{
                        const {title, para,subtitle} = item;
                        return (                        
                            <CCol lg={12} key={index}>
                            <div>
                                <h4 className="text-[1.8rem] md:text-[2.3rem] uppercase font-normal" style={{fontFamily: "var(--oswald-font)"}}>{subtitle}</h4>
                                <h3 className="text-[2rem] md:text-[4rem] uppercase font-normal w-full md:w-[65%] block mx-auto mb-3" style={{fontFamily: "var(--oswald-font)"}}>{title}</h3>
                                <p className="text-[16px] font-normal leading-6 w-full block mx-auto md:w-[65%]">{para}</p>
                                <Button to="tel:Call: 999-888-777" name="Call: 999-888-777" className="rounded-none uppercase hover:text-red-700 py-[8px] px-4 bg-red-700 hover:border-2 hover:bg-transparent
                                  hover:border-red-800 mt-2 inline-block text-[var(--white-color)] transition-all" />
                            </div>
                         </CCol>
                        )
                    })}
                </CRow>
          </CContainer>
       </section>
    )
}
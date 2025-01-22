import { CCol, CContainer, CRow } from "@coreui/react"
import { Button } from "./Button"

export const HomeSec2 = () =>{
    const mockData = [
        {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam suscipit officiis beatae iure, necessitatibus quas officia reiciendis ut nostrum debitis architecto aliquam facere, quae laboriosam nihil sunt? Officiis, distinctio!"
        }
    ]
    return (
       <section className="py-[30px] text-center">
          <CContainer>
                <CRow>
                    {mockData.map((item, index) =>{
                        const {title, para} = item;
                        return (
                            <CCol lg={12} key={index}>
                            <div>
                                <h3 className="text-[2re,] md:text-[2.3rem] uppercase font-normal w-full md:w-[65%] block mx-auto mb-3" style={{fontFamily: "var(--oswald-font)"}}>{title}</h3>
                                <p className="text-[16px] font-normal leading-6 w-full block mx-auto md:w-[65%]">{para}</p>
                                <Button name="Explore Full menu" className="text-white uppercase hover:text-red-700 bg-red-700 hover:border-2 hover:border-yellow-600
                                 hover:bg-yellow-600 mt-2 inline-block"/>
                            </div>
                         </CCol>
                        )
                    })}
                </CRow>
          </CContainer>
       </section>
    )
}
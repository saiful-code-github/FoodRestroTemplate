import { CCol, CContainer, CRow } from "@coreui/react"
import { Button } from './HomeSec/Button';
import img1 from '../assets/Images/ads1.jpg';
import img2 from '../assets/Images/ads2.jpg';

export const HomeSec5 = () =>{
    const mockData = [
        {
            image: img1,
            title: 'GET YOUR FREE',
            para: "CHEESE FRIES",
            name: "Learne More"
        },
        {
            image: img2,
            title: 'GET YOUR FREE',
            para: "CHEESE FRIES",
            name: "Learne More"
        }
    ]
    return (
         <section>
              <CContainer>
                  <CRow>
                    {mockData.map((item, index)=>{
                        const {image, title, para,name} = item;
                        return (
                            <CCol lg={6} key={index}>
                            <div className="p-[25px] h-[180px] md:h-[220px] object-contain" style={{background: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", textAlign: "right", backgroundRepeat: "no-repeat"}}>
                              <div>
                              <h2 className="text-[1.5rem] md:text-[2.25rem] font-light text-[var(--gray)]" style={{fontFamily: "var(--oswald-font)"}}>{title}
                                </h2>
                                <h2 className="text-[1.5rem] md:text-[2.37rem] mb-[20px] font-normal text-[var(--gray)]" style={{fontFamily: "var(--oswald-font)"}}>{para}
                                </h2>
                                <Button className="bg-red-700 rounded-none py-2 px-5 transition-all hover:scale-110 text-white hover:bg-yellow-500" name={name}/>
                              </div>
                            </div>
                        </CCol>
                        )
                    })}
                  </CRow>
              </CContainer>
         </section>
    )
}
import { CContainer } from "@coreui/react"
import { Card } from "./Card"

export const HomeSec4 = () =>{
    return (
        <section className="py-[40px]">
            <CContainer>
                 <div className="text-center">
                    <h2 className="text-[24px] md:text-[3rem] text-[var(--bg-color)] pb-[0] md:pb-3 font-medium" style={{fontFamily: "var(--oswald-font)"}}>OUR CRAZY BURGERS
                    </h2>
                    <p className="text-[18px] leading-6 font-noramal w-full md:w-[50%] block m-auto text-black)]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci cumque perspiciatis ad, non culpa quaerat ullam, odit mollitia, nostrum itaque? Maiores.
                    </p>
                </div>  
                {/* second row */}
                 <Card/>
            </CContainer>
        </section>
    )
}
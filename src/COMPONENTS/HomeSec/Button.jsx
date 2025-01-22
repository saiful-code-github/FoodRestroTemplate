import { Link } from "react-router-dom"

export const Button = ({ name, style ,className}) =>{
    return (
        <button><Link to="/" className={`text-[16px] bg-[var(--yellow)] font-semibold md:text-[18px] lg:text-[18px] tracking-normal md:tracking-wide lg:tracking-wide px-[45px] py-[12px] md:px-[65px] md:py-[12px] lg:py-[12px] lg:px-[65px] rounded-md ${className}`} style={{...style, textDecoration: "none",fontFamily: "var(--oswald-font)"}}>{name}</Link></button>
    )
}
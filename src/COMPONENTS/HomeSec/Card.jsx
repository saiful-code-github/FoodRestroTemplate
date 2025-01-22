import { CCol, CContainer, CRow } from "@coreui/react";
import img1 from '/src/assets/Images/burger1.jpg';
import img2 from '/src/assets/Images/burger2.jpg';
import img3 from '/src/assets/Images/burger3.jpg';
import img4 from '/src/assets/Images/burger4.jpg';
import img5 from '/src/assets/Images/burger5.jpg';
import img6 from '/src/assets/Images/burger6.jpg';
import img7 from '/src/assets/Images/burger7.jpg';
import img8 from '/src/assets/Images/burger8.jpg';

export const Card = () =>{
    const mackData = [
        {
            image: img1,
            rating: 4.2,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        },
        {
            image: img2,
            rating: 3,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        },
        {
            image: img3,
            rating: 4.5,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        },
        {
            image: img4,
            rating: 2.5,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        },
        {
            image: img5,
            rating: 4.8,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        },
        {
            image: img6,
            rating: 4,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        },
        {
            image: img7,
            rating: 5,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        },
        {
            image: img8,
            rating: 3,
            title: "Crispy Chicken",
            para: "Chicken breast, chilli sauce, tomatoes, coleslaw",
            Rupes: 99.15,
            btntext: "Add to Card"
        }
    ]
    //randerRating
    const randerRating = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if(rating > 0){
                stars.push(<i key={i} className="bi bi-star-fill"/>)
                rating--;
            } else if(rating < 0 && rating < 5){
                stars.push(<i key={`half`} className="bi bi-star-half"/>)
                rating--;
            }else{
                stars.push(<i key={`empty${i}`} className="bi bi-star"/>)
            }
        }
        return stars;
    }
    return ( 
        <section className="mt-[35px]">
            <CContainer>
                <CRow>
                    {mackData.map((item, index)=>{
                        const {image, rating, title, para, Rupes, btntext} = item;
                        return (
                            <CCol lg={3} className="w-full mb-4 sm:w-[50%] md:w-[25%]" key={index}>
                            <div className="overflow-hidden card">
                                <div className="overflow-hidden rounded-tl-md rounded-tr-md">
                                <img src={image} alt="" className="w-full rounded-tl-md rounded-tr-md h-full md:h-[130px] object-cover transform hover:scale-110 transition-all"/>
                                </div>
                                <div className="pt-2 pb-3 px-3 border-l-[1px] border-r-[1px] border-b-[1px] border-[#c7c7c7] rounded-bl-md rounded-br-md">
                                <div className="flex justify-between">
                                    <div className="text-[var(--yellow)]">{randerRating(rating)}</div>
                                    <div>
                                    <i className="bi bi-heart"></i>
                                    </div>
                                </div>
                                <h2 className="text-[1.25rem] mt-[10px] font-semibold capitalize" style={{fontFamily: "var(--oswald-font)"}}>{title}
                                </h2>
                                <p className="leading-[20px]">{para}</p>
                                <div className="flex card-box">
                                <button className="text-[var(--yellow)] bg-[var(--dark-red)] py-[8px] px-[10px] rounded-sm mr-3">${Rupes}</button>
                                <button className="text-[var(--black)] two_button bg-[var(--yellow)] transition-all py-[8px] px-[15px] rounded-sm"><i className="bi bi-bag mr-2"></i>{btntext}</button>
                                </div>
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
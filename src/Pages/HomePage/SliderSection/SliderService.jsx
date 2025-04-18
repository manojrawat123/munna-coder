import React from 'react'
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import card1 from "../../../Images/services/s-1.png";
import card2 from "../../../Images/services/s-2.png";
import card3 from "../../../Images/services/s-3.png";
import card4 from "../../../Images/services/s-4.png";
import card5 from "../../../Images/services/s-5.png";
import card6 from "../../../Images/services/s-6.png";
import card7 from "../../../Images/services/s-7.png";
import card8 from "../../../Images/services/s-8.png";
import card9 from "../../../Images/services/s-9.png";
import card10 from "../../../Images/services/s-10.png";


const cards= [
    {img: card1,heading:"Social Media Creatives",subheading:"Brand-specific Graphics"},
    {img: card2,heading:"Animated Ads",subheading:"Interactive Ad Elements"},
    {img: card3,heading:"Video Editing",subheading:"Seamless Video Transitions"},
    {img: card4,heading:"Logo Designing",subheading:"Unique Brand Identity"},
    {img: card5,heading:"AI Artist",subheading:"Neural Style Transfer"},
    {img: card6,heading:"Wordpress site",subheading:"Custom WordPress Themes"},
    {img: card7,heading:"Digital Design",subheading:"Digital Illustrations"},
    {img: card8,heading:"Color Grading",subheading:"Consistent Visual Tone"},
    {img: card9,heading:"Responsive Design",subheading:"Adaptive Web Design"},
    {img: card10,heading:"Special Effects (VFX) Editing",subheading:"CGI Implementation"},
    // {img: card11,heading:"Educational Video Editing",subheading:"Informative Content Editing"},
]




function PopularServices() {
  return (
    <div className='popular-services-section my-4 px-[32px]'>
       <div className='popular-services-inner'>
            <div className='heading my-3'>
                <h1 className='text-3xl md:text-4xl font-semibold text-gray-600 my-3 mb-6'>Popular Services</h1>
            </div>
            <div className='services-card'>
                <ServicesCardSlide/>
            </div>

       </div>
    </div>  
  )
}


function ServicesCard({ subheading,heading,img })
{
    return(
        <div className='card relative mx-3 cursor-pointer group -z-10'>
            <img className='object-cover h-full w-full rounded-[4px] brightness-90 group-hover:brightness-100' src={img} />
            <div className='card-tex text-white font-semibold absolute w-full top-0 left-0 px-5 py-5'>
                <h3 className='md:text-sm text-xs'>{subheading}</h3>
                <h1 className='text-xl md:text-3xl'>{heading}</h1>
            </div>

        </div>
    )
}

function ServicesCardSlide()
{
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,        
        autoplaySpeed: 3000,  
        pauseOnHover: false,  
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className='card-slides'>
            <Slider {...settings}>
                {cards.map((card, i)=> <ServicesCard key={i} {...card} />)}
            </Slider>
        </div>
    )
}


export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='before:none shadow-md absolute -right-6 top-[50%] -translate-y-[50%] bg-white z-50 cursor-pointer h-12 w-12 rounded-full flex items-center justify-center'

      onClick={onClick}
    >
      <GrFormNext className='text-3xl text-gray-500' />
    </div>
  );
}

export function SamplePrevArrow(props) {
  return (
    <div
      className='before:none shadow-md absolute -left-6 top-[50%] -translate-y-[50%] bg-white z-50 cursor-pointer h-12 w-12 rounded-full flex items-center justify-center'
      onClick={props.onClick}
    >
      <GrFormPrevious className='text-3xl text-gray-500'/>
    </div>
  );
}
export default PopularServices;
"use client"

import Image from "next/image"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Partners() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (
        <div className="bg-yellowcustom mt-[70px] min-h-[10px] w-full">
            <div className="wrapper mx-auto container justify-between items-center py-7 mix-blend-color-burn ">
                <div className="slidepartner">
                    <Slider {...settings}>
                        <div><Image src="/images/hm.png" width={119} height={71}  alt="" /> </div>
                        <div><Image src="/images/obey.png" width={150} height={53} alt="" /> </div>
                        <div><Image src="/images/shopyfy.png" width={119} height={71} alt="" /> </div>
                        <div><Image src="/images/lacoste.png" width={150} height={53} alt="" /> </div>
                        <div><Image src="/images/levis.png" width={119} height={71} alt="" /> </div>
                        <div><Image src="/images/amazon.png" width={150} height={53} alt="" /> </div>
                        <div><Image src="/images/obey.png" width={150} height={53} alt="" /> </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
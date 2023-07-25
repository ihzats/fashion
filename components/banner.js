"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios";


// async function getData() {
//     const data = await fetch("https://sub.stagingaja.com/api/main-banners?populate=*");
//     return data.json()
// }

export default function Banner() {
    // const dataBanner = await getData();
    const [data, setData] = useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const getData =
        axios.get("https://sub.stagingaja.com/api/main-banners?populate=*")
            .then(res => {
                setData(res.data.data)
            })

    useEffect(() => {
        getData
    }, [])
    return (
        <div className="container mx-auto ">
            <Slider>
                {
                    data.map(function (item) {
                        return (
                            <div>
                                <div className="bg-[#E7E6E6] py-[30px] px-[50px] min-h-[100px] w-full rounded-2xl flex items-center justify-between">
                                    <div className="relative">
                                        <h1 className='text-gra font-black leading-[77px] text-[70px] max-w-[400px]'>
                                            {item.attributes.title}
                                            {/* <div className="relative leading-[77px] before:content-[''] before:z-0 before:ml-[-10px] 
                        before:absolute before:min-w-full before:h-full before:bg-[#fff] before:-rotate-2">
                                                        <span className='relative z-10'>LET'S</span>
                                                    </div>
                                                    EXPLORE
                                                    <div className="relative leading-[77px] before:content-[''] before:z-0 before:ml-[-10px] 
                        before:absolute before:min-w-full before:h-full before:bg-yellowcustom before:-rotate-2">
                                                        <span className='relative z-10'>UNIQUE</span>
                                                    </div>
                                                    CLOTHES. */}
                                        </h1>

                                        <p>{item.attributes.description}</p>
                                        <div className='flex items-center gap-5 mt-5'>
                                            <Image src="/images/shape.svg" width={190} height={32} alt="" />
                                            <Link href='#' className='bg-black text-white rounded-md px-7 py-3'>Shop Now</Link>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <Image src={`https://sub.stagingaja.com${item.attributes.image.data.attributes.url}`} width={871} height={784} alt="" />
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }


            </Slider>
        </div>

    )
}

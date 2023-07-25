import React from 'react'
import Title from "./title"
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const ItemProduct = (props) => {
    return (
        <div className="relative">
            <div className="mb-5">
                <Image src={props.image} width={484} height={704} alt="" />
            </div>
            <Link href={props.link} className="flex items-center justify-between">
                <div className="font-medium">
                    <h4 className="font-Poppins text-[32px]">{props.title}</h4>
                    <h6 className="text-[24px]">Explore Now!</h6>
                </div>
                <BsArrowRight className="text-[32px]" />
            </Link>
        </div>
    )
}

export default function Arrival() {
    return (
        <div className="container mx-auto my-10">
            <Title title="NEW ARRIVALS" />
            <div className="flex justify-between">
                <ItemProduct image="/images/prod1.png" link="/" title="Hoodies & Sweetshirt" />
                <ItemProduct image="/images/prod2.png" link="/" title="Coats & Parkas" />
                <ItemProduct image="/images/prod3.png" link="/" title="Tees & T-Shirt" />
            </div>
        </div>
    )
}
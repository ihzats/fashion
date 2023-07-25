import React from 'react'

export default function Title({ title }) {
    return (
        <div className="font-Poppins font-black text-[48px] relative inline-block tracking-[4px] mb-7
            after:content-[''] after:bg-[url('/images/shape2.svg')] after:w-[186px] after:h-[35px] after:absolute
            after:right-0 after:bottom-0 after:-z-[1] after:-mr-3
        ">
            {title}</div>
    )
}
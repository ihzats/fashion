import Link from "next/link"
import React from 'react'
import Image from 'next/image';

export default function Header() {
    return (
        <div className="container mx-auto items-center">
            <div className="flex items-center justify-between">
                <Link href="/"><Image src="/images/logo.svg" width={237} height={60} alt="logo" /></Link>
                <div className="flex items-center gap-8">
                    <ul className="flex justify-between items-center gap-8">
                        <li><Link href="/">CATALOGUE</Link></li>
                        <li><Link href="/">FASHION</Link></li>
                        <li><Link href="/">FAVOURITE</Link></li>
                        <li><Link href="/">LIFESTYLE</Link></li>
                    </ul>
                    <Link href="/" className="btn">SIGN UP</Link>
                </div>
            </div>
        </div>
    )
}

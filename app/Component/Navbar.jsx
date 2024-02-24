import React from 'react'
import Link from 'next/link'
import logo from './dojo-logo (1).png'
export default function Navbar() {
    return (
    <nav>
        {/* <image>
            src={logo}
            alt="Dojo helpDesk"
        </image> */}
        <h1 id='Title'>منصة تغطية تسويقية خدماتية</h1>
        <Link href="/"> عن المنصة </Link>
        <Link href="/tickets">تقديم طلب</Link>
    </nav>
    )
}

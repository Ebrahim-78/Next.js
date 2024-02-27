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
        <h1 id='Title'> Do JoHelpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets"> tickets </Link>
    </nav>
    )
}

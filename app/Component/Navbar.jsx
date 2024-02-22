import React from 'react'
import Link from 'next/link'
import logo from './dojo-logo (1).png'
export default function Navbar() {
    return (
    <nav>
        <image>
            src={logo}
            alt="Dojo helpDesk"
        </image>
        <h1>Dojo Help</h1>
        <Link href="/">Dashbord</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
    )
}

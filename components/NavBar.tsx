import Link from 'next/link'
import React from 'react'
import { DiBugsense } from "react-icons/di";

const NavBar = () => {

  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'issues', href: '/issues'},

  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><DiBugsense className='w-15 h-15' /></Link>
        <ul className='flex space-x-6'>
          {
            links.map((item, index) => (
                          <li key={index}><Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href={item.href}>{item.label}</Link></li>
            ))
          }
        </ul>
    </nav>
  )
}

export default NavBar
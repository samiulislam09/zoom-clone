"use client"
import { sideBarLinks } from '@/constants/menus'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <div>
      {
        sideBarLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link key={link.name} href={link.href}>
              <div className={`p-4 cursor-pointer flex items-center gap-2 transition-all duration-300 ease-in-out rounded-md transform hover:scale-[1.02] ${
                isActive 
                  ? 'bg-[#0E78F9] text-white shadow-lg scale-[1.02] border-l-4 border-blue-300' 
                  : 'hover:bg-gray-700 text-gray-300 hover:text-white hover:shadow-md'
              }`}>
                <link.icon className={`inline-block mr-2 transition-transform duration-300 ${
                  isActive ? 'scale-110 text-blue-100' : ''
                }`} />
                <span className="transition-all duration-300">{link.name}</span>
              </div>
            </Link>
          )
        })
      }

    </div>
  )
}

export default Sidebar

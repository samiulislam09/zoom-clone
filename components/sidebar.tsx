import { sideBarLinks } from '@/constants/menus'
import React from 'react'

const Sidebar = () => {

  return (
    <div className=''>
      {
        sideBarLinks.map((link) => (
          <div key={link.name} className='p-4 hover:bg-gray-700 cursor-pointer flex items-center gap-2'>
            <link.icon className='inline-block mr-2' />
            {link.name}
          </div>
      ))
      }
      
    </div>
  )
}

export default Sidebar

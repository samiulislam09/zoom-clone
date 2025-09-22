import NavBar from '@/components/navBar';
import Sidebar from '@/components/sidebar';
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='text-white'>
      <div className=''>
        <NavBar />
      </div>
      <div className='flex'>
        <div className='w-64 h-screen bg-gray-800 text-white'>
          <Sidebar />
        </div>
        <div className='flex-1 p-4'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default RootLayout;

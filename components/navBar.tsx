import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SignedIn, UserButton } from '@clerk/nextjs'

const NavBar = () => {
  return (
    <div className='w-full h-16 bg-gray-800 text-white flex items-center justify-between px-8'>
      <p>Logo</p>
      {/* <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar> */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default NavBar

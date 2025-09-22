import React from 'react'

const PersonalRoomPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('/images/home-banner.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={backgroundImageStyle} className='h-72 w-full rounded-lg flex flex-col justify-between text-white bg-opacity-75 bg-black p-10'>
      <p className='text-lg font-semibold'>Upcoming Meetings</p>
      <div>
        <p className='text-5xl font-bold'>12:04<span> PM</span></p>
        <p className='text-lg text-gray-300'>Friday, 29 March 2024</p>
      </div>
    </div>
  )
}

export default PersonalRoomPage

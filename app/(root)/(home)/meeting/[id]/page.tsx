import React from 'react'

const MeetingPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const {id} = await params;

  return (
    <div>
      <h1>Meeting ID: {id}</h1>
    </div>
  )
}

export default MeetingPage

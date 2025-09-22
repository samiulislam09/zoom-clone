'use client'

import { useEffect, useState } from 'react'

export const ClientOnlyComponent = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    // Return a loading state or skeleton that matches the server-rendered content
    return <div className="w-full h-full" />
  }

  return <>{children}</>
}

// Alternative NoSSR component for completely client-side content
export const NoSSR = ({ children, fallback = null }: { 
  children: React.ReactNode; 
  fallback?: React.ReactNode 
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? <>{children}</> : <>{fallback}</>
}
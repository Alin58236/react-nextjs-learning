import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col bg-white/[1%] max-w-7xl min-h-screen mx-auto px-3">{children}</div>
  )
}

export default Container

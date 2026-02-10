import React from 'react'

type ReusableH1Props = {
  children?: React.ReactNode
  className?: string
}

function H1({children, className}: ReusableH1Props) {
  return (
    <h1 className={`text-3xl lg:text-6xl font-bold tracking-tight ${className}`}>
        {children}
    </h1>
  )
}

export default H1
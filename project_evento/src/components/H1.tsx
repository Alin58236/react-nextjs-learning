import React from 'react'

type ReusableH1Props = {
  children?: React.ReactNode
}

function H1({children}: ReusableH1Props) {
  return (
    <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        {children}
    </h1>
  )
}

export default H1
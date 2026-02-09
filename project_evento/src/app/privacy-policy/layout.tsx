import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
        layout test
      {children}
    </div>
  )
}

export default layout
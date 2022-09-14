import React from 'react'

export const Index = ({ className = "", children, ...rest }) => {
  return (
    <main className={ `${className} page` } {...rest}>
      {children}
    </main>
  )
}

export default Index
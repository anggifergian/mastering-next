import React from 'react'

const Heading = ({ children, bold = true }) => {
  return (
    <h1 className={`${bold ? 'font-bold' : 'font-normal'} text-gray-800 text-2xl`}>{children}</h1>
  )
}

export default Heading
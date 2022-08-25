import React from 'react'

const Paragraph = ({ children, bold = false }) => {
  return (
    <p className={`${bold ? 'font-bold' : 'font-normal'} text-gray-600`}>{children}</p>
  )
}

export default Paragraph
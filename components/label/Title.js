import React from 'react'

const Title = ({ children, bold = true }) => {
  return (
    <h3 className={`${bold ? 'font-bold' : 'font-normal'} text-gray-800 text-lg font-bold`}>{children}</h3>
  )
}

export default Title
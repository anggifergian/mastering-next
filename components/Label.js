import React from 'react'

const Label = ({ children, type = 'paragraph' }) => {
  if (type === 'heading') {
    return (
      <h1 className='text-gray-800 text-2xl font-bold'>{children}</h1>
    )
  }

  if (type === 'title') {
    return (
      <h1 className="text-gray-800 text-lg font-bold">{children}</h1>
    )
  }

  return (
    <p className="text-gray-600">{children}</p>
  )
}

export default Label
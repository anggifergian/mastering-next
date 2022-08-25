import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const ChevronLeft = ({ type = 'md' }) => {
  return (
    <ChevronLeftIcon className={`${type === 'md' ? 'w-5 h-5' : 'w-7 h-7'} text-gray-600`} />
  )
}

export default ChevronLeft
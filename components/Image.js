import React from 'react'
import NextImage from 'next/image'

const Image = ({
    alt,
    src,
    width = 100,
    height = 100,
}) => {
    return (
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className='object-cover'
        />
    )
}

export default Image
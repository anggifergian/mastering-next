import React from 'react'
import { FadeInAndOut } from './framer'

const Container = ({ children, type = 'md', hidePadding = false }) => {
    const maxWidth = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        full: 'max-w-full'
    }

    return (
        <FadeInAndOut>
            <div
                className={`${hidePadding ? 'p-0' : 'p-4'} ${maxWidth[type]} mx-auto h-full`}
            >
                {children}
            </div>
        </FadeInAndOut>
    )
}

export default Container
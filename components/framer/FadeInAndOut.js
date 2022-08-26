import React from 'react'
import { motion } from 'framer-motion'

const FadeInAndOut = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='h-full'
        >
            {children}
        </motion.div>
    )
}

export default FadeInAndOut
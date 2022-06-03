import { useEffect, useState } from 'react'

import { UIContext } from '../context/UIContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isScroll, setIsScroll] = useState(false)

  const handleScroll = () => setIsScroll(window.scrollY >= 70)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <UIContext.Provider value={isScroll}>
      <Component {...pageProps} />
    </UIContext.Provider>
  )
}

export default MyApp

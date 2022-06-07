import { useEffect, useState } from 'react'

import { UIContext } from '../context/UIContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState({
    isNavFill: false,
    isScrollTop: false
  })

  const handleChange = newValue => setValue({ ...value, ...newValue })

  const handleScroll = () => {
    handleChange({
      isNavFill: window.scrollY >= 60,
      isScrollTop: window.scrollY >= 300
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <UIContext.Provider value={{value, setValue}}>
      <Component {...pageProps} />
    </UIContext.Provider>
  )
}

export default MyApp

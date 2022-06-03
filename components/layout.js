import { useContext } from 'react'
import { UIContext } from '../context/UIContext'

import Header from './Header'
import Navbar from './Navbar'

export default function Layout({ children, title = "Mastering Next" }) {
  const isScroll = useContext(UIContext)

  return (
    <>
      <Header title={title} />

      <main className="mx-4 px-4 relative min-h-screen md:flex md:flex-col">
        <Navbar isScroll={isScroll} />

        <div className={`px-4 pt-10 md:pt-20`} style={{ height: 1000 }}>
          {children}
        </div>
      </main>
    </>
  )
}

import { useContext } from 'react'
import { UIContext } from '../context/UIContext'
import { Header, Navbar, Footer, ScrollTop } from './index'

export default function Layout({ children, title = "Mastering Next" }) {
  const context = useContext(UIContext)

  return (
    <>
      <Header title={title} />
      <main className="flex flex-col h-screen bg-red-200">
        <Navbar isNavFill={context.value.isNavFill} />
        <main className="bg-white pt-0 md:pt-20 flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollTop isScrollTop={context.value.isScrollTop} />
      </main>
    </>
  )
}

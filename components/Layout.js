import { useContext } from 'react'
import { UIContext } from '../context/UIContext'
import { Header, Navbar, Footer, ScrollTop } from './index'

export default function Layout({
  children,
  title = "Mastering Next",
  hideNavbar = false,
  hideFooter = false,
}) {
  const context = useContext(UIContext)

  return (
    <>
      <Header title={title} />
      <main className="flex flex-col h-screen bg-red-200">
        {!hideNavbar && <Navbar isNavFill={context.value.isNavFill} />}
        <main className={`pt-0 ${!hideNavbar && `md:pt-20`} flex-grow bg-gray-100`}>
          {children}
        </main>
        {!hideFooter && <Footer />}
        <ScrollTop isScrollTop={context.value.isScrollTop} />
      </main>
    </>
  )
}

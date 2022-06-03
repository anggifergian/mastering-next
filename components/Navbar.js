import Link from "next/link"

const navigations = [
  {
    key: 'home',
    path: '/',
    title: 'Home'
  },
  {
    key: 'about-us',
    path: '/about-us',
    title: 'About us'
  }
]

const nav_wrapper = 'fixed space-x-3 inset-x-0 top-0 z-10 px-10 py-4 hidden md:flex justify-start transition duration-300 ease-in'
const nav_container = 'hover:shadow-sm cursor-pointer rounded-lg px-4 py-2 transition duration-300 ease-in-out'
const nav_link_transparent = 'bg-white text-gray-800 hover:bg-blue-500 hover:text-white'
const nav_link_filled = 'bg-blue-500 text-white hover:bg-white hover:text-blue-500'

const Navbar = ({ isScroll }) => (
  <div className={`${nav_wrapper} ${isScroll ? 'bg-blue-500 shadow-lg' : 'bg-transparent'}`}>
    {navigations.map(nav => (
      <Link href={nav.path} key={nav.key}>
        <div className={`${nav_container} ${isScroll ? nav_link_filled : nav_link_transparent}`}>
          {nav.title}
        </div>
      </Link>
    ))}
  </div>
)

export default Navbar
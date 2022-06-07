import Button from "./Button"

const ScrollTop = ({ isScrollTop }) => {
  const handleScrollTop = () => window.scrollTo(0)

  return (
    <div className={`${isScrollTop ? 'block' : 'hidden'} fixed bottom-4 right-6 z-50 w-auto`}>
      <button
        className="rounded-full bg-blue-500 p-4 text-white opacity-80"
        type="button"
        onClick={handleScrollTop}
      >
        Top
      </button>
    </div>
  )
}

export default ScrollTop
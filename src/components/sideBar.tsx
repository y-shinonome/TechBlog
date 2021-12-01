import { useContext } from 'react'
import { sideBarContext } from '../components/header'
import Profile from '../components/profile'
import Categories from '../components/categories'

const SideBar: React.VFC = () => {
  const { isOpen, setIsOpen } = useContext(sideBarContext)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className={`bg-commonBlack/70 h-[100vh] backdrop-blur-[2px] fixed z-20 left-0 top-0 w-full transition duration-300 backdrop-filter ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } `}
        onClick={toggleSideBar}
      ></div>
      <nav
        className={`pt-20 h-[100vh] bg-commonWhite/80 fixed z-20 right-0 top-0 overflow-auto transform duration-300 ${
          isOpen ? 'w-[70%] px-3' : 'w-0'
        }`}
      >
        <Profile className="mb-6" />
        <Categories />
      </nav>
    </>
  )
}

export default SideBar

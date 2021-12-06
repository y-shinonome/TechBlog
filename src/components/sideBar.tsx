import { useContext } from 'react'
import { sideBarContext } from './Layout'
import Profile from './profile'
import Categories from './categories'
import Share from './share'
import { toggleScrollRock } from '../utils/scrollRock'

const SideBar: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(sideBarContext)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
    toggleScrollRock(isOpen)
  }

  return (
    <>
      <div
        className={`bg-commonBlack/70 h-[100vh] backdrop-blur-[2px] fixed z-20 left-0 top-0 w-full transition duration-300 backdrop-filter ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } `}
        onClick={toggleSideBar}
      ></div>
      <aside
        className={`pt-20 h-[100vh] bg-commonWhite/80 fixed z-20 right-0 top-0 overflow-auto transform duration-300 ${
          isOpen ? 'w-[70%] px-3' : 'w-0'
        }`}
      >
        <Profile className="mb-6" />
        <Categories className="mb-6" />
        <Share />
      </aside>
    </>
  )
}

export default SideBar

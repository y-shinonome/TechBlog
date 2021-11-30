import { useContext } from 'react'
import { sideBarContext } from '../components/header'

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
        className={`h-[100vh] bg-commonWhite/70 fixed z-20 right-0 top-0 overflow-auto transform duration-300 ${
          isOpen ? 'w-[60%]' : 'w-0'
        }`}
      ></nav>
    </>
  )
}

export default SideBar

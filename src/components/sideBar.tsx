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
        className={`fixed top-0 left-0 bg-commonBlack/70 h-[100vh] w-full transition duration-300 backdrop-filter backdrop-blur-[2px] z-20 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } `}
        onClick={toggleSideBar}
      ></div>
      <nav
        className={`fixed h-[100vh] top-0 right-0 overflow-auto bg-commonWhite/70 transform duration-300 z-20 ${
          isOpen ? 'w-[60%]' : 'w-0'
        }`}
      ></nav>
    </>
  )
}

export default SideBar

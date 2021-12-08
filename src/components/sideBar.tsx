import { useContext, useEffect } from 'react'
import { sideBarContext } from './layout'
import Aside from './aside'
import { toggleScrollRock, clearScrollRock } from '../utils/scrollRock'

const SideBar: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(sideBarContext)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
    toggleScrollRock(isOpen)
  }

  useEffect(() => {
    return () => {
      clearScrollRock()
      setIsOpen(false)
    }
  }, [setIsOpen])

  return (
    <>
      <div
        className={`bg-commonBlack/70 h-[100vh] backdrop-blur-[2px] fixed z-20 left-0 top-0 w-full transition duration-300 backdrop-filter ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } `}
        onClick={toggleSideBar}
      ></div>
      <Aside
        className={`pt-20 h-[100vh] bg-commonWhite/80 fixed z-20 right-0 top-0 overflow-auto transform duration-300 ${
          isOpen ? 'w-[70%] px-3' : 'w-0'
        }`}
      />
    </>
  )
}

export default SideBar

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
        className={`fixed left-0 top-0 z-20 h-[100vh] w-full bg-commonBlack/70 backdrop-blur-[2px] transition duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        } `}
        onClick={toggleSideBar}
      ></div>
      <Aside
        className={`fixed right-0 top-0 z-20 h-[100vh] overflow-auto bg-commonWhite/80 pt-20 duration-300 ${
          isOpen ? 'w-[70%] px-3' : 'w-0'
        }`}
      />
    </>
  )
}

export default SideBar

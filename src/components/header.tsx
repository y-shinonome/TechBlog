import React, { useContext } from 'react'
import Link from 'next/link'
import { sideBarContext } from './layout'
import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import { toggleScrollRock } from '../utils/scrollRock'
import { useGetWindowWidth } from '../utils/client'

const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(sideBarContext)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
    toggleScrollRock(isOpen)
  }

  return (
    <>
      <h1 className="title-clip transition-color dark: fixed z-20 bg-commonBlack py-1 pl-3 pr-5 text-xl font-bold text-commonWhite duration-300 dark:bg-[#1a1a1a] dark:text-commonWhite/80 sm:py-2 sm:pr-8 sm:text-2xl md:pl-6">
        <Link href="/1">
          <a>TECH BLOG</a>
        </Link>
      </h1>
      {useGetWindowWidth() < 768 && (
        <button
          className="hover-bright fixed right-0 z-30 my-1 mr-3 rounded-lg p-1 text-center text-3xl text-commonWhite mix-blend-difference"
          aria-label="メニューボタン"
          onClick={toggleSideBar}
        >
          {!isOpen ? <AiOutlineMenu /> : <VscChromeClose />}
        </button>
      )}
      <div className="transition-color mb-10 h-[70px] bg-commonBlack duration-300 dark:bg-[#1a1a1a]"></div>
    </>
  )
}

export default Header

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
      <div className="fixed z-20 flex w-full justify-center">
        <h1 className="my-1 w-full max-w-[1100px] px-3 text-2xl font-bold text-commonWhite md:px-6">
          <Link href="/1">
            <a>TECH BLOG</a>
          </Link>
        </h1>
      </div>
      {useGetWindowWidth() < 768 && (
        <button
          className="hover-bright fixed right-0 z-30 my-1 mr-3 rounded-lg p-1 text-center text-3xl text-commonWhite mix-blend-difference"
          aria-label="メニューボタン"
          onClick={toggleSideBar}
        >
          {!isOpen ? <AiOutlineMenu /> : <VscChromeClose />}
        </button>
      )}
      <div className="w- h-[50px] bg-commonBlack/90"></div>
      <div
        className="sticky top-[-6px] z-10 mb-10 h-[70px] bg-commonBlack/90 backdrop-blur-[2px]"
        style={{ clipPath: 'url(#headerClip)' }}
      >
        <svg>
          <clipPath id="headerClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 264.58333,0 H 0 c 0,0 0,139.14169 0,211.66667 0,32.57636 50.492142,60.5429 82.163264,52.91666 C 179.55566,241.13175 143.78897,50.138115 233.05916,4.683886 242.47298,-0.10940048 264.58333,7.9375 264.58333,7.9375 Z"
              transform="scale(0.003779 0.003779)"
            />
          </clipPath>
        </svg>
      </div>
    </>
  )
}

export default Header

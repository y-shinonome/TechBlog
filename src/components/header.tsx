import React, { useContext } from 'react'
import Link from 'next/link'
import { sideBarContext } from './Layout'
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
      <h1 className="fixed z-20 ml-3 my-1 text-commonWhite text-2xl font-bold md:ml-6">
        <Link href="/1">
          <a>TECH BLOG</a>
        </Link>
      </h1>
      {useGetWindowWidth() < 768 && (
        <button
          className="hover-bright fixed z-30 right-0 mr-3 my-1 p-1 text-center text-commonWhite text-3xl rounded-lg mix-blend-difference"
          aria-label="メニューボタン"
          onClick={toggleSideBar}
        >
          {!isOpen ? <AiOutlineMenu /> : <VscChromeClose />}
        </button>
      )}
      <div className="h-[50px] w- bg-commonBlack/90"></div>
      <div
        className="h-[70px] top-[-6px] bg-commonBlack/90 backdrop-blur-[2px] sticky z-10 mb-10"
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

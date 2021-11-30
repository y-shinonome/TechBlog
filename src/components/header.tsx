import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import SideBar from './sideBar'

export const sideBarContext = React.createContext(
  {} as {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="fixed text-lg ml-1 font-bold text-commonWhite z-10">
        techblog.shi-nono.me
      </div>
      <button
        className="fixed right-0 p-1 mr-1 my-1 text-3xl mix-blend-difference text-commonWhite rounded-lg text-center hover-bright z-30"
        aria-label="メニューボタン"
        onClick={toggleSideBar}
      >
        {!isOpen ? <AiOutlineMenu /> : <VscChromeClose />}
      </button>
      <div className="h-[50px] w- bg-commonBlack"></div>
      <div
        className="bg-commonBlack h-[15vw] max-h-[60px] sticky top-0"
        style={{ clipPath: 'url(#headerClip)' }}
      >
        <svg>
          <clipPath id="headerClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.02338608,20.855404 C 13.016922,24.094407 26.508504,26.382441 52.929193,26.399852 141.67317,26.458333 156.53232,0 185.23171,-0.05846521 H 0.02338608 Z"
              transform="scale(0.003779 0.037795)"
            />
          </clipPath>
        </svg>
      </div>
      <sideBarContext.Provider value={{ isOpen, setIsOpen }}>
        <SideBar />
      </sideBarContext.Provider>
    </>
  )
}

export default Header

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

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <h1 className="fixed z-20 ml-3 my-1 text-commonWhite text-lg font-bold">
        techblog.shi-nono.me
      </h1>
      <button
        className="hover-bright fixed z-30 right-0 mr-3 my-1 p-1 text-center text-commonWhite text-3xl rounded-lg mix-blend-difference"
        aria-label="メニューボタン"
        onClick={toggleSideBar}
      >
        {!isOpen ? <AiOutlineMenu /> : <VscChromeClose />}
      </button>
      <div className="h-[50px] w- bg-commonBlack"></div>
      <div
        className="h-[15vw] max-h-[60px] sticky z-10 top-0 mb-10 bg-commonBlack"
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

import React, { useState } from 'react'
import Header from './header'
import Footer from './Footer'
import SideBar from './sideBar'
import Aside from './aside'
import { useGetWindowWidth } from '../utils/client'

type Props = {
  children: React.ReactNode
}

export const sideBarContext = React.createContext(
  {} as {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
)

const Layout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <sideBarContext.Provider value={{ isOpen, setIsOpen }}>
        <Header />
        {useGetWindowWidth() < 768 && <SideBar />}
      </sideBarContext.Provider>
      <div className="max-w-[1100px] mx-auto px-3 md:flex md:px-6">
        <div className="md:mr-8 md:w-full">{children}</div>
        {useGetWindowWidth() >= 768 && (
          <Aside className="w-[25vw] max-w-[250px] flex-shrink-0" />
        )}
      </div>
      <Footer />
    </>
  )
}

export default Layout

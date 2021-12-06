import React, { useState } from 'react'
import Header from './header'
import Footer from './Footer'
import Profile from './profile'
import Categories from './categories'
import SideBar from './sideBar'
import Share from './share'
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
      <div className="max-w-[1100px] mx-auto md:flex">
        <div>{children}</div>
        {useGetWindowWidth() >= 768 && (
          <aside className="w-[250px] flex-shrink-0">
            <Profile className="mb-6" />
            <Categories className="mb-6" />
            <Share />
          </aside>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Layout

import React from 'react'
import Profile from './profile'
import Categories from './categories'
import Share from './share'

type Props = {
  className: string
}

export const sideBarContext = React.createContext(
  {} as {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
)

const Aside: React.FC<Props> = ({ className }) => {
  return (
    <aside className={className}>
      <Profile className="mb-6 md:mb-12" />
      <Categories className="mb-6 md:mb-12" />
      <Share />
    </aside>
  )
}

export default Aside

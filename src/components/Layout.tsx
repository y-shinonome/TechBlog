import Header from './header'
import Footer from './Footer'
import Profile from '../components/profile'
import Categories from '../components/categories'
import Share from '../components/share'
import { useGetWindowWidth } from '../utils/client'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
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

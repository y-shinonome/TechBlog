import DarkModeButton from './darkModeButton'
import Profile from './profile'
import Categories from './categories'
import Share from './share'
import TocBot from './tocbot'

type Props = {
  className: string
}

const Aside: React.FC<Props> = ({ className }) => {
  return (
    <aside className={className}>
      <DarkModeButton className="mb-5" />
      <Profile className="mb-6 md:mb-12" />
      <div className="sticky top-4 mb-12">
        <TocBot className="toc mb-12" />
        <Categories className="mb-6 md:mb-12" />
        <Share className="mb-6 md:mb-12" />
      </div>
    </aside>
  )
}

export default Aside

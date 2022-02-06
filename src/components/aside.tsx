import DarkModeButton from './darkModeButton'
import Profile from './profile'
import Categories from './categories'
import Share from './share'

type Props = {
  className: string
}

const Aside: React.FC<Props> = ({ className }) => {
  return (
    <aside className={className}>
      <DarkModeButton />
      <Profile className="mb-6 md:mb-12" />
      <Categories className="mb-6 md:mb-12" />
      <Share className="mb-6 md:mb-12" />
    </aside>
  )
}

export default Aside

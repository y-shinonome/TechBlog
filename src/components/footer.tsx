import BuiltWith from './builtWith'
import Copyright from './copyright'
import Links from './links'
import Others from './others'

type props = {
  className?: string
}

const Footer: React.FC<props> = ({ className }) => {
  return (
    <div className={className}>
      <footer className="flex flex-wrap justify-between w-full">
        <Copyright />
        <Links />
        <Others />
        <BuiltWith />
      </footer>
    </div>
  )
}

export default Footer

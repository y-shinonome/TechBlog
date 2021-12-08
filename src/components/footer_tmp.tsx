import BuiltWith from './builtWith'
import Copyright from './copyright'
import Links from './Links'
import Others from './others'

const Footer: React.FC = () => {
  return (
    <div className="border-t-[1px] border-commonBlack/20 px-3">
      <footer className="max-w-[1200px] sm:w-[95%] flex flex-wrap justify-between w-full sm:mx-auto">
        <Copyright />
        <Links />
        <Others />
        <BuiltWith />
      </footer>
    </div>
  )
}

export default Footer

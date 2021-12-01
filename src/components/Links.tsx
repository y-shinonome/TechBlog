import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import ExternalLink from '../components/externalLink'

const Links: React.FC = () => {
  return (
    <article className="mr-[10vw] mt-3">
      <h2 className="mb-3 text-lg font-medium">Links</h2>
      <ul>
        <li>
          <div className="inline-flex items-center">
            <FaTwitter className="mr-1 text-lg" />
            <ExternalLink href="https://twitter.com" className="my-1 text-sm">
              Twitter
            </ExternalLink>
          </div>
        </li>
        <li className="inline-flex">
          <div className="inline-flex items-center">
            <FaGithub className="mr-1 text-lg" />
            <ExternalLink
              href="https://github.com/y-shinonome"
              className="my-1 text-sm"
            >
              GitHub
            </ExternalLink>
          </div>
        </li>
      </ul>
    </article>
  )
}

export default Links

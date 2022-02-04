import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
  href: string
}

const CustomLink: React.FC<Props> = ({ href, ...otherProps }) => {
  const isInternalLink = href.substr(0, 1) === '/' ? true : false

  return (
    <>
      {isInternalLink ? (
        <Link href={href}>
          <a className="text-link">{otherProps.children}</a>
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          {otherProps.children}
          <FiExternalLink className="ml-1 inline" />
        </a>
      )}
    </>
  )
}

export default CustomLink

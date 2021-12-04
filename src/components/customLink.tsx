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
          <a>{otherProps.children}</a>
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {otherProps.children}
          <FiExternalLink className="inline ml-1" />
        </a>
      )}
    </>
  )
}

export default CustomLink

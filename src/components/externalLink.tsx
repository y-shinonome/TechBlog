import { ReactNode } from 'react'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

const ExternalLink: React.FC<Props> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-link inline-flex flex-wrap items-center ${className}`}
    >
      {children}
      <FiExternalLink className="ml-1" />
    </a>
  )
}

export default ExternalLink

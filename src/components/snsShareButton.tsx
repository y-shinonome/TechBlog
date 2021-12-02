import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const SnsShareButton: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`inline-flex items-center justify-around mb-2 mr-2 w-16 h-10 hover:text-commonWhite text-2xl active:bg-opacity-40 border active:border-opacity-0 transition ${className}`}
    >
      {children}
    </div>
  )
}

export default SnsShareButton

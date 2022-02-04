import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const SnsShareButton: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`mb-2 mr-2 inline-flex h-10 w-16 items-center justify-around border text-2xl transition hover:text-commonWhite active:border-opacity-0 active:bg-opacity-40 ${className}`}
    >
      {children}
    </div>
  )
}

export default SnsShareButton

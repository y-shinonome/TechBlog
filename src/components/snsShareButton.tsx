import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const SnsShareButton: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`mb-2 mr-2 inline-flex h-10 w-16 items-center justify-around bg-commonBlack/5 text-3xl text-commonBlack/80 duration-300 dark:bg-commonWhite/5 dark:text-commonWhite/70 ${className}`}
    >
      {children}
    </div>
  )
}

export default SnsShareButton

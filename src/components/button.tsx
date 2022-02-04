type props = {
  className?: string
}

const Button: React.FC<props> = ({ children, className }) => {
  return (
    <button
      className={`inline-flex items-center border border-commonBlack transition hover:bg-commonBlack hover:text-commonWhite active:border-opacity-0 active:bg-opacity-40
      ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

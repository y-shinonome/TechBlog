type props = {
  className?: string
}

const Button: React.FC<props> = ({ children, className }) => {
  return (
    <button
      className={`inline-flex items-center hover:text-commonWhite hover:bg-commonBlack active:bg-opacity-40 border border-commonBlack active:border-opacity-0 transition
      ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

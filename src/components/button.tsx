type props = {
  className?: string
}

const Button: React.FC<props> = ({ children, className }) => {
  return (
    <button
      className={`px-1 hover:text-commonWhite font-bold hover:bg-commonBlack active:bg-opacity-40 border-2 border-commonBlack active:border-opacity-0 transition
      ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

type props = {
  className?: string
}

const Button: React.FC<props> = ({ children, className }) => {
  return (
    <button
      className={`active:bg-commonBlack/40 active:border-commonBlack/0 px-1 hover:text-commonWhite font-bold hover:bg-commonBlack border-2 border-commonBlack transition
      ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

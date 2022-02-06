import { useState, useEffect } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'

type Props = {
  className?: string
}

const DarkModeButton: React.FC<Props> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  return (
    <div className={className}>
      <button
        className="w-16 rounded-full bg-[#f8f8a6] dark:bg-[#333649]"
        onClick={toggleDarkMode}
      >
        <div className="relative left-[-16px] m-[2px] inline-block rounded-full bg-commonWhite p-1 align-middle text-xl duration-300 dark:left-[16px] dark:bg-commonBlack">
          {isDarkMode === false ? (
            <BsSunFill className="text-[#ff4511]"></BsSunFill>
          ) : (
            <BsMoonStarsFill className="text-[#EEEE88]"></BsMoonStarsFill>
          )}
        </div>
      </button>
    </div>
  )
}

export default DarkModeButton

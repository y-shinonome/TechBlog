import { useState, useEffect } from 'react'

export const useGetWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const correctWindowWidth =
    typeof windowWidth === 'undefined' ? 0 : windowWidth
  return correctWindowWidth
}

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

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

export const usePath = (callback: (asPath: string) => void) => {
  const refCallback = useRef<undefined | ((asPath: string) => void)>()
  const asPath = useRouter().asPath

  useEffect(() => {
    refCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (refCallback.current) {
      refCallback.current(asPath)
    }
  }, [asPath])
}

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export const toggleScrollRock = (isRock:boolean) => {
    const bodyElement = document.querySelector('body')
    if (bodyElement !== null) {
      !isRock ? disableBodyScroll(bodyElement) : clearAllBodyScrollLocks()
    }
  }

export const clearScrollRock = () => {
  clearAllBodyScrollLocks()
}

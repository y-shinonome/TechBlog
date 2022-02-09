import tocbot from 'tocbot'
import { useEffect, useState } from 'react'
import { usePath } from '../utils/client'

type Props = {
  className: string
}

const Aside: React.FC<Props> = ({ className }) => {
  const [Path, setPath] = useState('')

  usePath((asPath) => {
    setPath(asPath)
  })

  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.prose',
      headingSelector: 'h2, h3',
    })
    return () => tocbot.destroy()
  }, [Path])

  return (
    <>
      <h3 className="mb-1 text-lg font-bold">Index</h3>
      <nav className={`toc mb-12 ${className}`} />
    </>
  )
}

export default Aside

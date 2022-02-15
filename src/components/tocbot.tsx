import tocbot from 'tocbot'
import { useEffect, useState } from 'react'
import { usePath } from '../utils/client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type Props = {
  className?: string
}

const Tocbot: React.FC<Props> = ({ className }) => {
  const [path, setPath] = useState('')

  usePath((asPath) => {
    setPath(asPath)
  })

  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.prose',
      headingSelector: 'h2, h3',
      collapseDepth: 6,
    })
    return () => tocbot.destroy()
  }, [path])

  const firstPath = path.split('/')[1]

  return (
    <>
      {firstPath === 'posts' && (
        <div className={`${className}`}>
          <h3 className="mb-1 text-lg font-bold">Contents</h3>
          <nav className="toc" css={toc} />
        </div>
      )}
    </>
  )
}

export default Tocbot

const toc = css`
  .is-active-link {
    font-weight: 700;
  }
  .is-active-li {
    background: rgba(128, 128, 128, 0.15);
  }
  .toc-list-item > ol > li {
    padding-left: 10px;
  }
`

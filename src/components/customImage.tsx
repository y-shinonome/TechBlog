import Image from 'next/image'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type Props = {
  src: string
  wRatio?: number
  hRatio?: number
}

const CustomImg: React.FC<Props> = ({ src, wRatio = 16, hRatio = 10 }) => {
  const alt = () => {
    const regexp = src.match('.+/(.+?).[a-z]+([?#;].*)?$')
    if (regexp) {
      return regexp[1]
    } else {
      return 'undefined'
    }
  }

  return (
    <div css={style(wRatio, hRatio)}>
      <div className="imgContainer">
        <Image
          src={src}
          alt={alt()}
          blurDataURL={`${src}?w=20&h=20`}
          placeholder="blur"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default CustomImg

const style = (wRatio: number, hRatio: number) => css`
  .imgContainer {
    position: relative;
    aspect-ratio: ${wRatio} / ${hRatio};
  }
`

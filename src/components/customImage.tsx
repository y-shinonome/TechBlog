import Image from 'next/image'

type Props = {
  src: string
  width?: string
  height?: string
  alt: string
}

const CustomImg: React.FC<Props> = ({ src, width, height, alt }) => {
  return (
    <div>
      {typeof width !== 'undefined' ? (
        <Image
          src={src}
          alt={alt}
          blurDataURL={`${src}?w=20&h=20`}
          placeholder="blur"
          width={width}
          height={height}
        />
      ) : (
        <div className="h-[60vw] max-h-[462px] md:h-[calc(60vw-18vw)] relative w-full">
          <Image
            src={src}
            alt={alt}
            blurDataURL={`${src}?w=20&h=20`}
            placeholder="blur"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  )
}

export default CustomImg

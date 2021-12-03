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
        <div className="min-h-[250px] h-[50vw] max-h-[600px] relative">
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

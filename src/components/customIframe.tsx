type Props = {
  src: string
}

const CustomImg: React.FC<Props> = ({ src }) => {
  return (
    <iframe
      className="aspect-video w-full"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default CustomImg

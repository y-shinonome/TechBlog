import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

type Props = {
  className?: string
}

const Profile: React.FC<Props> = ({ className }) => {
  return (
    <article className={className}>
      <div className="flex items-center mb-2">
        <div className="h-[100px] w-[100px] relative">
          <Image
            src="/images/sample.png"
            alt="sample"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ml-4 text-lg font-bold">しののめ</div>
      </div>
      <div className="mb-2">
        SampleText
        山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。
      </div>
      <ul className="flex">
        <li className="inline-flex items-center mr-3">
          <FaTwitter className="mr-1" />
          Twitter
        </li>
        <li className="inline-flex items-center">
          <FaGithub className="mr-1" />
          GitHub
        </li>
      </ul>
    </article>
  )
}

export default Profile

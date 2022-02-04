import Image from 'next/image'
import ExternalLink from './externalLink'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

type Props = {
  className?: string
}

const Profile: React.FC<Props> = ({ className }) => {
  return (
    <article className={className}>
      <div className="mb-2 flex items-center">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src="/images/cube.png"
            alt="sample"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ml-4 text-lg font-bold">しののめ</div>
      </div>
      <div className="mb-2">
        <p>
          職業プログラマではないけど趣味でエンジニアリングをしています。
          <br />
          モノづくり好きが高じてJamstack構成の爆速ブログを作ってみました。
        </p>
      </div>
      <ul className="flex">
        <li className="mr-3 inline-flex items-center">
          <FaTwitter className="mr-1 text-lg" />
          <ExternalLink
            href="https://twitter.com/snnnnnnnnnnnm"
            className="my-1 text-sm"
          >
            Twitter
          </ExternalLink>
        </li>
        <li className="inline-flex items-center">
          <FaGithub className="mr-1 text-lg" />
          <ExternalLink
            href="https://github.com/y-shinonome"
            className="my-1 text-sm"
          >
            GitHub
          </ExternalLink>
        </li>
      </ul>
    </article>
  )
}

export default Profile

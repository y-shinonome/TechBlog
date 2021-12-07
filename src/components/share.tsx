import { useState, useEffect } from 'react'
import SnsShareButton from '../components/snsShareButton'
import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  PocketShareButton,
  EmailShareButton,
} from 'react-share'
import { IoIosMail } from 'react-icons/io'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { SiLine, SiHatenabookmark, SiPinterest, SiPocket } from 'react-icons/si'

type Props = {
  className?: string
}

const Share: React.FC<Props> = ({ className }) => {
  const pageUrl = typeof window !== 'undefined' ? document.location.href : ''

  const ogImageUrl = () => {
    const metaElementContent =
      typeof window === 'undefined'
        ? ''
        : document.querySelector<HTMLMetaElement>('meta[property="og:image"]')
            ?.content
    return typeof metaElementContent === 'undefined' ? '' : metaElementContent
  }

  const [mediaUrl, setMediaUrl] = useState(ogImageUrl())

  useEffect(() => {
    setMediaUrl(ogImageUrl())
  }, [pageUrl])

  return (
    <article className={className}>
      <h2 className="mb-1 text-lg font-bold">Share</h2>

      <TwitterShareButton url={pageUrl}>
        <SnsShareButton className="hover:bg-[#1DA1F2] hover:border-[#1DA1F2]">
          <FaTwitter />
        </SnsShareButton>
      </TwitterShareButton>
      <FacebookShareButton url={pageUrl}>
        <SnsShareButton className="hover:bg-[#1877f2] hover:border-[#1877f2]">
          <AiFillFacebook />
        </SnsShareButton>
      </FacebookShareButton>
      <LineShareButton url={pageUrl}>
        <SnsShareButton className="hover:bg-[#00b900] hover:border-[#00b900]">
          <SiLine />
        </SnsShareButton>
      </LineShareButton>
      <HatenaShareButton url={pageUrl}>
        <SnsShareButton className="hover:bg-[#00a4de] hover:border-[#00a4de]">
          <SiHatenabookmark />
        </SnsShareButton>
      </HatenaShareButton>
      <LinkedinShareButton url={pageUrl}>
        <SnsShareButton className="hover:bg-[#0a66c2] hover:border-[#0a66c2]">
          <FaLinkedin />
        </SnsShareButton>
      </LinkedinShareButton>
      <PinterestShareButton url={pageUrl} media={mediaUrl}>
        <SnsShareButton className="hover:bg-[#E60023] hover:border-[#E60023]">
          <SiPinterest />
        </SnsShareButton>
      </PinterestShareButton>
      <PocketShareButton url={pageUrl}>
        <SnsShareButton className="hover:bg-[#ee4056] hover:border-[#ee4056]">
          <SiPocket />
        </SnsShareButton>
      </PocketShareButton>
      <EmailShareButton url={pageUrl}>
        <SnsShareButton className="hover:bg-[#AB99BA] hover:border-[#AB99BA]">
          <IoIosMail />
        </SnsShareButton>
      </EmailShareButton>
    </article>
  )
}

export default Share

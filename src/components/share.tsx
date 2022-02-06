import { useState, useEffect } from 'react'
import SnsShareButton from './snsShareButton'
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
        <SnsShareButton className="hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2]">
          <FaTwitter />
        </SnsShareButton>
      </TwitterShareButton>
      <FacebookShareButton url={pageUrl}>
        <SnsShareButton className="hover:text-[#1877f2] dark:hover:text-[#1877f2]">
          <AiFillFacebook />
        </SnsShareButton>
      </FacebookShareButton>
      <LineShareButton url={pageUrl}>
        <SnsShareButton className="hover:text-[#00b900] dark:hover:text-[#00b900]">
          <SiLine />
        </SnsShareButton>
      </LineShareButton>
      <HatenaShareButton url={pageUrl}>
        <SnsShareButton className="hover:text-[#00a4de] dark:hover:text-[#00a4de]">
          <SiHatenabookmark />
        </SnsShareButton>
      </HatenaShareButton>
      <LinkedinShareButton url={pageUrl}>
        <SnsShareButton className="hover:text-[#0a66c2] dark:hover:text-[#0a66c2]">
          <FaLinkedin />
        </SnsShareButton>
      </LinkedinShareButton>
      <PinterestShareButton url={pageUrl} media={mediaUrl}>
        <SnsShareButton className="hover:text-[#E60023] dark:hover:text-[#E60023]">
          <SiPinterest />
        </SnsShareButton>
      </PinterestShareButton>
      <PocketShareButton url={pageUrl}>
        <SnsShareButton className="hover:text-[#ee4056] dark:hover:text-[#ee4056]">
          <SiPocket />
        </SnsShareButton>
      </PocketShareButton>
      <EmailShareButton url={pageUrl}>
        <SnsShareButton className="hover:text-[#AB99BA] dark:hover:text-[#AB99BA]">
          <IoIosMail />
        </SnsShareButton>
      </EmailShareButton>
    </article>
  )
}

export default Share

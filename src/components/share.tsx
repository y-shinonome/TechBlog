import SnsShareButton from '../components/snsShareButton'
import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  PinterestShareButton,
} from 'react-share'
import { IoIosMail } from 'react-icons/io'
import { FaTwitter } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { SiLine, SiHatenabookmark, SiPinterest } from 'react-icons/si'

type Props = {
  className?: string
}

const Share: React.FC<Props> = ({ className }) => {
  return (
    <article className={className}>
      <h2 className="mb-1 text-lg font-bold">Share</h2>
      <EmailShareButton url="/">
        <SnsShareButton className="hover:bg-[#AB99BA] hover:border-[#AB99BA]">
          <IoIosMail />
        </SnsShareButton>
      </EmailShareButton>
      <TwitterShareButton url="/">
        <SnsShareButton className="hover:bg-[#1DA1F2] hover:border-[#1DA1F2]">
          <FaTwitter />
        </SnsShareButton>
      </TwitterShareButton>
      <FacebookShareButton url="/">
        <SnsShareButton className="hover:bg-[#1877f2] hover:border-[#1877f2]">
          <AiFillFacebook />
        </SnsShareButton>
      </FacebookShareButton>
      <LineShareButton url="/">
        <SnsShareButton className="hover:bg-[#00b900] hover:border-[#00b900]">
          <SiLine />
        </SnsShareButton>
      </LineShareButton>
      <HatenaShareButton url="/">
        <SnsShareButton className="hover:bg-[#00a4de] hover:border-[#00a4de]">
          <SiHatenabookmark />
        </SnsShareButton>
      </HatenaShareButton>
      <PinterestShareButton url="/" media="/">
        <SnsShareButton className="hover:bg-[#E60023] hover:border-[#E60023]">
          <SiPinterest />
        </SnsShareButton>
      </PinterestShareButton>
    </article>
  )
}

export default Share

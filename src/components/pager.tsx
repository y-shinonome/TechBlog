import Link from 'next/link'
import Button from '../components/button'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

type props = {
  pages: {
    id: string
    title: string
  }[]
  index: number
  className?: string
}

const Pager: React.FC<props> = ({ pages, index, className }) => {
  return (
    <div className={`flex flex-wrap justify-between w-full ${className}`}>
      {pages[index + 1] !== undefined && (
        <div className="mb-3 mr-5">
          <p className="font-medium">Older</p>
          <Link href={`/posts/${pages[index + 1].id}`}>
            <a>
              <Button className="py-[2px] px-2 text-sm">
                <BsArrowLeft className="mr-1" />
                {pages[index + 1].title}
              </Button>
            </a>
          </Link>
        </div>
      )}
      {pages[index - 1] !== undefined && (
        <div>
          <p className="font-medium">Newer</p>
          <Link href={`/posts/${pages[index - 1].id}`}>
            <a>
              <Button className="py-[2px] px-2 text-sm">
                {pages[index - 1].title}
                <BsArrowRight className="ml-2" />
              </Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Pager

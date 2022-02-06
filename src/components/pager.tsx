import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
    <div className={`flex w-full flex-wrap justify-between ${className}`}>
      {pages[index + 1] !== undefined && (
        <div className="mb-3 mr-5">
          <p className="font-medium">Older</p>
          <Link href={`/posts/${pages[index + 1].id}`}>
            <a>
              <button className="button-common py-1 px-2 text-sm">
                <IoIosArrowBack className="mr-1" />
                {pages[index + 1].title}
              </button>
            </a>
          </Link>
        </div>
      )}
      {pages[index - 1] !== undefined && (
        <div>
          <p className="font-medium">Newer</p>
          <Link href={`/posts/${pages[index - 1].id}`}>
            <a>
              <button className="button-common py-1 px-2 text-sm">
                {pages[index - 1].title}
                <IoIosArrowForward className="ml-2" />
              </button>
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Pager

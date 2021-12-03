import Link from 'next/link'
import Button from '../components/button'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

type props = {
  pages: {
    id: string
    title: string
  }[]
  index: number
}

const Pager: React.FC<props> = ({ pages, index }) => {
  return (
    <div className="flex flex-wrap justify-between px-6 w-full sm:px-0">
      <div className="mb-3 mr-5">
        {pages[index + 1] !== undefined && (
          <>
            <p className="text-lg font-medium">Older</p>
            <Link href={`/posts/${pages[index + 1].id}`}>
              <a>
                <Button>
                  <div className="mr-1 w-4">
                    <BsArrowLeft />
                  </div>
                  <span className="text-left">{pages[index + 1].title}</span>
                </Button>
              </a>
            </Link>
          </>
        )}
      </div>
      <div>
        {pages[index - 1] !== undefined && (
          <>
            <p className="text-lg font-medium">Newer</p>
            <Link href={`/posts/${pages[index - 1].id}`}>
              <a>
                <Button>
                  <span className="text-left">{pages[index - 1].title}</span>
                  <div className="ml-1 w-4">
                    <BsArrowRight />
                  </div>
                </Button>
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Pager

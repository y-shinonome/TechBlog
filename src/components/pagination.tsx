import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const range = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i)

type props = {
  totalCount: number
  currentPage: number
  cllassName?: string
}

const Pagination: React.FC<props> = ({
  totalCount,
  currentPage,
  cllassName,
}) => {
  const frontPath = useRouter().asPath.replace(/\d*$/, '')

  return (
    <div className={`flex items-center justify-center text-xl ${cllassName}`}>
      {currentPage === 1 ? (
        <span className="mx-1 block px-1 py-2 text-commonBlack/30 dark:text-commonWhite/30">
          <IoIosArrowBack />
        </span>
      ) : (
        <Link href={currentPage === 2 ? `/` : `${frontPath}${currentPage - 1}`}>
          <a
            aria-label="前のページ"
            className="hover-common mx-1 block px-1 py-2"
          >
            <IoIosArrowBack />
          </a>
        </Link>
      )}
      <ul className="flex">
        {range(1, Math.ceil(totalCount / 5)).map((number, index) => (
          <li key={index}>
            <Link href={number === 1 ? `/` : `${frontPath}${number}`}>
              <a
                className={`hover-common mx-1 block px-2 py-1 ${
                  currentPage === number &&
                  'pointer-events-none border-b-2 border-commonBlack pb-[2px] font-bold dark:border-commonWhite'
                } `}
              >
                {number}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {currentPage === Math.ceil(totalCount / 5) ? (
        <span className="mx-1 block px-1 py-2 text-commonBlack/30 dark:text-commonWhite/30">
          <IoIosArrowForward />
        </span>
      ) : (
        <Link href={`${frontPath}${currentPage + 1}`}>
          <a
            aria-label="次のページ"
            className="hover-common mx-1 block px-1 py-2"
          >
            <IoIosArrowForward />
          </a>
        </Link>
      )}
    </div>
  )
}

export default Pagination

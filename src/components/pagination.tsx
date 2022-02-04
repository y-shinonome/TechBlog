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
      <Link href={currentPage === 1 ? `/1` : `${frontPath}${currentPage - 1}`}>
        <a
          aria-label="次のページ"
          className={`hover-dark mx-1 block px-1 py-2 ${
            currentPage === 1 && 'pointer-events-none text-commonBlack/30'
          } `}
        >
          <IoIosArrowBack />
        </a>
      </Link>

      <ul className="flex">
        {range(1, Math.ceil(totalCount / 5)).map((number, index) => (
          <li key={index}>
            <Link href={`${frontPath}${number}`}>
              <a
                className={`hover-dark mx-1 block px-2 py-1 ${
                  currentPage === number &&
                  'pointer-events-none bg-commonBlack font-bold text-commonWhite'
                } `}
              >
                {number}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={
          currentPage === Math.ceil(totalCount / 5)
            ? `/1`
            : `${frontPath}${currentPage + 1}`
        }
      >
        <a
          aria-label="次のページ"
          className={`hover-dark mx-1 block px-1 py-2 ${
            currentPage === Math.ceil(totalCount / 5) &&
            'pointer-events-none text-commonBlack/30'
          } `}
        >
          <IoIosArrowForward />
        </a>
      </Link>
    </div>
  )
}

export default Pagination

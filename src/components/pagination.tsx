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
      <Link href={`${frontPath}${currentPage - 1}`}>
        <a
          className={`hover-dark block mx-1 px-1 py-2 ${
            currentPage === 1 && 'text-commonBlack/30 pointer-events-none'
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
                className={`hover-dark block mx-1 px-2 py-1 ${
                  currentPage === number &&
                  'text-commonWhite font-bold bg-commonBlack pointer-events-none'
                } `}
              >
                {number}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`${frontPath}${currentPage + 1}`}>
        <a
          className={`hover-dark block mx-1 px-1 py-2 ${
            currentPage === Math.ceil(totalCount / 5) &&
            'text-commonBlack/30 pointer-events-none'
          } `}
        >
          <IoIosArrowForward />
        </a>
      </Link>
    </div>
  )
}

export default Pagination

import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { IoIosArrowForward } from 'react-icons/io'

type Props = {
  post: {
    id: string
    title: string
    heroImage: {
      url: string
    }
    categories: [
      {
        name: string
        id: string
      }
    ]
    description: string
    body: string
    publishedDate: Date
    updatedDate: Date
  }
}

dayjs.extend(timezone)
dayjs.extend(utc)

const BlogCardWide: NextPage<Props> = ({ post }) => {
  const publishedDate = dayjs(post.publishedDate)
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')
  const updatedDate = dayjs(post.updatedDate)
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')

  return (
    <section className="mb-20">
      <div className="flex">
        <div className="w-[35vw] flex-shrink-0 flex-col md:w-[25vw] md:max-w-[263px]">
          <div className="relative mb-2 mr-3 h-[21vw] md:h-[15vw] md:max-h-[165px]">
            <Link href={`/posts/${post.id}`}>
              <a>
                <Image
                  src={post.heroImage.url}
                  alt={post.title}
                  layout="fill"
                  objectFit="contain"
                  blurDataURL={`${post.heroImage.url}?w=20&h=20`}
                  placeholder="blur"
                />
              </a>
            </Link>
          </div>
          <ul className="mb-2 flex flex-wrap">
            {post.categories.map((category, index) => (
              <li key={index} className="mb-2 mr-3 text-sm">
                <Link href={`/categories/${category.id}/1`}>
                  <a>
                    <button className="button-common p-1">
                      {category.name}
                    </button>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col">
          <Link href={`/posts/${post.id}`}>
            <a className="hover-common block">
              <h2 className="mb-3 text-lg font-bold">{post.title}</h2>
              <div
                className="mb-3 text-sm"
                dangerouslySetInnerHTML={{
                  __html: `${post.description}`,
                }}
              />
            </a>
          </Link>
          <div className="flex justify-between">
            <div className="text-xs">
              <time className="block" dateTime={post.publishedDate.toString()}>
                {publishedDate}に公開
              </time>
              {post.publishedDate !== post.updatedDate && (
                <time className="block" dateTime={post.updatedDate.toString()}>
                  {updatedDate}に更新
                </time>
              )}
            </div>
            <Link href={`/posts/${post.id}`}>
              <a>
                <button className="button-common px-2 py-1">
                  記事を読む
                  <IoIosArrowForward className="ml-1" />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCardWide

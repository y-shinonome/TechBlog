import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { VscArrowRight } from 'react-icons/vsc'

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
        <div className="w-[35vw] flex-col flex-shrink-0">
          <div className="h-[21vw] relative mb-2 mr-3">
            <Link href={`/posts/${post.id}`}>
              <a>
                <Image
                  src={post.heroImage.url}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={`${post.heroImage.url}?w=20&h=20`}
                  placeholder="blur"
                />
              </a>
            </Link>
          </div>
          <ul className="flex flex-wrap mb-2">
            {post.categories.map((category, index) => (
              <li key={index} className="mb-2 mr-3 text-xs">
                <Link href={`/categories/${category.id}/1`}>
                  <a>
                    <Button className="py-[2px] px-1">{category.name}</Button>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col">
          <Link href={`/posts/${post.id}`}>
            <a className="hover-dark block">
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
                <Button className="px-1">
                  投稿を読む
                  <VscArrowRight className="ml-1" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCardWide

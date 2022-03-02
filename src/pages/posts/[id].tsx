import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { client } from '../../utils/microCMS'
import Meta from '../../components/meta'
import CustomLink from '../../components/customLink'
import CustomImage from '../../components/customImage'
import CustomIframe from '../../components/customIframe'
import CustomH2 from '../../components/customH2'
import CustomH3 from '../../components/customH3'
import Pager from '../../components/pager'
import CodeBlock from '../../components/codeBlock'

type props = {
  source: MDXRemoteSerializeResult
  post: post
  pages: {
    id: string
    title: string
  }[]
}

type params = {
  id: string
}

const components = {
  a: CustomLink,
  image: CustomImage,
  code: CodeBlock,
  h2: CustomH2,
  h3: CustomH3,
  iframe: CustomIframe,
}

dayjs.extend(timezone)
dayjs.extend(utc)

const Post: React.FC<props> = ({ source, post, pages }) => {
  const publishDate = dayjs(post.publishedDate)
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')
  const updatedDate = dayjs(post.updatedDate)
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')
  //投稿記事一覧のリストから現在のページのindexを返す
  const index = pages.findIndex((page) => page.id === post.id)

  return (
    <>
      <Meta
        subTitle={post.title}
        imageUrl={post.heroImage.url}
        type="article"
      />
      <section>
        <h1 className="mb-10 text-4xl font-bold">{post.title}</h1>
        <div className="mb-4 flex flex-wrap text-sm">
          <time dateTime={post.publishedDate.toString()} className="mb-1 mr-4">
            {publishDate}に公開
          </time>
          {publishDate !== updatedDate && (
            <time dateTime={post.updatedDate.toString()}>
              {updatedDate}に更新
            </time>
          )}
        </div>
        <ul className="mb-6 flex flex-wrap">
          {post.categories.map((category, index) => (
            <li key={index} className="mb-2 mr-2">
              <Link href={`/categories/${category.id}/1`}>
                <a>
                  <button className="button-common py-1 px-2">
                    {category.name}
                  </button>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="mb-6"
          dangerouslySetInnerHTML={{
            __html: `${post.description}`,
          }}
        />
        <div className="relative mb-6 h-[60vw] w-full md:h-[calc(60vw-18vw)] md:max-h-[495px]">
          <Image
            src={post.heroImage.url}
            alt={post.title}
            blurDataURL={`${post.heroImage.url}?w=20&h=20`}
            placeholder="blur"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <section className="prose prose-custom mb-20 max-w-none prose-h2:border-b-2 prose-h2:border-commonBlack/40 prose-h2:pb-1 prose-h3:underline prose-h3:decoration-commonBlack/40 prose-h3:decoration-dotted prose-h3:underline-offset-4 prose-em:bg-commonBlack/5 prose-em:px-1 prose-em:not-italic prose-code:bg-commonBlack/5 dark:prose-invert dark:prose-h2:border-commonWhite/60 dark:prose-h3:decoration-commonWhite/60 dark:prose-em:bg-commonWhite/20 dark:prose-code:bg-commonWhite/20">
          <MDXRemote {...source} components={components} />
        </section>
        <Pager pages={pages} index={index} className="mb-12" />
      </section>
    </>
  )
}

export const getStaticPaths = async () => {
  //microCMS_APIからpostsデータのidのみを全件取得する
  const PostData = await client.get({
    endpoint: 'posts',
    queries: { fields: 'id' },
  })
  //ルーティングの情報を持ったparamsオブジェクトを配列の形で格納する
  const paths = PostData.contents.map((content: { id: string }) => ({
    params: content,
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<props, params> = async ({
  params,
}) => {
  const id = params?.id
  const PostData: post = await client.get({ endpoint: 'posts', contentId: id })
  const source = PostData.body
  const mdxSource = await serialize(source)
  const pageData = await client.get({
    endpoint: 'posts',
    queries: { limit: 1000, fields: 'id,title' },
  })

  return {
    props: {
      source: mdxSource,
      post: PostData,
      pages: pageData.contents,
    },
  }
}

export default Post

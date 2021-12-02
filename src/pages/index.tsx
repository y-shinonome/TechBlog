import type { NextPage } from 'next'
import { client } from '../api/microCMS'
import BlogCard from '../components/blogCard'

type Props = {
  posts: {
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
  }[]
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <ul className="px-3">
      {posts.map((post, index) => (
        <li key={index}>
          <BlogCard post={post} />
        </li>
      ))}
    </ul>
  )
}

export const getStaticProps = async () => {
  const postData = await client.get({
    endpoint: 'posts',
    queries: { limit: 5 },
  })
  return {
    props: {
      posts: postData.contents,
    },
  }
}

export default Index

import Button from '../components/button'
import categoryList from '../utils/categoryList'

type Props = {
  className?: string
}

const Categories: React.VFC<Props> = ({ className }) => {
  return (
    <article className={className}>
      <h2 className="mb-1 text-lg font-bold">All Categories</h2>
      <ul className="flex flex-wrap">
        {categoryList.map((category, index) => (
          <li key={index} className="mb-2 mr-2">
            <Button>{category.name}</Button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Categories

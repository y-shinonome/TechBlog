import Button from '../components/button'

type Props = {
  className?: string
}

const categoryList = [
  { id: 'd2ps6ipc-4n', name: 'React' },
  { id: 'k-ucibgv-e6j', name: 'TailwindCSS' },
  { id: 'ung4k6hoc', name: 'その他' },
  { id: 'q0jqdrn4c', name: 'Next.js' },
  { id: 'gzy0dpzii6', name: 'TypeScript' },
  { id: 'w2cw_6sfs', name: 'ブログ構築' },
]

const Categories: React.FC<Props> = ({ className }) => {
  return (
    <article className={className}>
      <h2 className="mb-1 text-lg font-bold">All Categories</h2>
      <ul className="flex flex-wrap">
        {categoryList.map((category, index) => (
          <li key={index} className="mb-2 mr-2">
            <Button className="px-1">{category.name}</Button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Categories

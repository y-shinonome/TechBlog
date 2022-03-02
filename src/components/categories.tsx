import Link from 'next/link'

type Props = {
  className?: string
}

const categoryList = [
  { id: 'w2cw_6sfs', name: 'ブログ構築' },
  { id: 'gzy0dpzii6', name: 'TypeScript' },
  { id: 'mz2jnzo2e', name: 'RaspberryPi' },
  { id: 'ma6t88itybx', name: 'Docker' },
  { id: 'k-ucibgv-e6j', name: 'TailwindCSS' },
  { id: '9spc7kja6', name: '電子工作' },
  { id: 'ung4k6hoc', name: 'その他' },
]

const Categories: React.FC<Props> = ({ className }) => {
  return (
    <article className={className}>
      <h2 className="mb-1 text-lg font-bold">All Categories</h2>
      <ul className="flex flex-wrap">
        {categoryList.map((category, index) => (
          <li key={index} className="mb-2 mr-2">
            <Link href={`/categories/${category.id}/1`}>
              <a>
                <button className="button-common px-2 py-1">
                  {category.name}
                </button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Categories

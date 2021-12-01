import ExternalLink from '../components/externalLink'

const BuiltWith: React.FC = () => {
  const architectures = [
    { name: 'React', url: 'https://reactjs.org/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'Vercel', url: 'https://vercel.com/' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'microCMS', url: 'https://microcms.io/' },
    {
      name: 'next-mdx-remote',
      url: 'https://www.npmjs.com/package/next-mdx-remote',
    },
  ]
  return (
    <article className="mb-6 mr-10 mt-3">
      <h2 className="mb-3 text-lg font-medium">Built with</h2>
      <ul>
        {architectures.map((architecture, index) => (
          <li key={index}>
            <ExternalLink href={architecture.url} className="my-1 text-sm">
              {architecture.name}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default BuiltWith

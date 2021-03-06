import dayjs from 'dayjs'
import ExternalLink from './externalLink'

const Copyright: React.FC = () => {
  const currentYear = dayjs().year()
  return (
    <article className="mr-[10vw] mb-6 mt-3">
      <h2 className="mb-3 text-lg font-medium">Copyright</h2>
      <p className="text-sm">
        {`© 2021-${currentYear} shinonome`}
        <br />
        All Rights Reserved.
        <br />
        Released under the{' '}
        <ExternalLink href="https://github.com/y-shinonome/TechBlog/blob/main/LICENSE">
          MIT license
        </ExternalLink>
      </p>
    </article>
  )
}

export default Copyright

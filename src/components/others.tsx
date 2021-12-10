import Link from 'next/link'

const Others: React.FC = () => {
  return (
    <article className="mr-[10vw] mb-6 mt-3">
      <h2 className="mb-3 text-lg font-medium">Others</h2>
      <ul>
        <li>
          <Link href="/privacy-policy">
            <a className="text-link my-1 text-sm">プライバシーポリシー</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-link my-1 text-sm">お問い合わせ</a>
          </Link>
        </li>
      </ul>
    </article>
  )
}

export default Others

import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default Layout
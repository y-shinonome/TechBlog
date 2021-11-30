type Props = {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

export default Layout

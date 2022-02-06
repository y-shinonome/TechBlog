const DarkModeButton: React.FC = () => {
  const toggleDark = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <>
      <button className="button-common m-5 px-2" onClick={toggleDark}>
        ダークモード(調整中)
      </button>
    </>
  )
}

export default DarkModeButton

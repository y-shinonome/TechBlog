import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <div className="fixed text-lg font-bold text-commonWhite z-10 ml-1">
        techblog.shi-nono.me
      </div>
      <button
        className="fixed mix-blend-difference text-commonWhite right-0 p-1 mr-1 my-1 rounded-lg text-center text-3xl hover-bright z-10"
        aria-label="メニューボタン"
      >
        <AiOutlineMenu />
      </button>
      <div className="h-[50px] w- bg-commonBlack"></div>
      <div
        className="bg-commonBlack h-[15vw] max-h-[60px] sticky top-0"
        style={{ clipPath: 'url(#headerClip)' }}
      >
        <svg>
          <clipPath id="headerClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.02338608,20.855404 C 13.016922,24.094407 26.508504,26.382441 52.929193,26.399852 141.67317,26.458333 156.53232,0 185.23171,-0.05846521 H 0.02338608 Z"
              transform="scale(0.003779 0.037795)"
            />
          </clipPath>
        </svg>
      </div>
    </>
  )
}

export default Header

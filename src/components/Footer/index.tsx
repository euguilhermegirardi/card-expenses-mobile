import { Brackets, AlignJustify, Home, History } from 'lucide-react'
import ApplicationRoutes from '../../utils/navigation/applicationRoutes'
import { useNavigate } from 'react-router-dom'

export default function Footer({
  isFooterVisible,
}: {
  isFooterVisible?: boolean
}) {
  const navigate = useNavigate()

  const isHomeActive = location.pathname === '/'
  const isCatalogueActive = location.pathname === '/catalogue'
  const isHistoryActive = location.pathname === '/history'

  function handleNavigation(path: string) {
    navigate(path)
  }

  return (
    <>
      {isFooterVisible ? null : (
        <footer className="absolute bottom-0 flex h-20 w-full max-w-[425px] items-center justify-evenly rounded-tl-[2.8rem] rounded-tr-[2.8rem] bg-[#2a3766] py-4">
          <div
            className={` flex h-12 w-12 items-center justify-center ${
              isHomeActive
                ? 'rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-2'
                : ''
            }`}
          >
            <button
              type="button"
              onClick={() => handleNavigation(ApplicationRoutes.home)}
            >
              <Home color={isHomeActive ? 'white' : '#788ac8'} />
            </button>
          </div>

          <div
            className={` flex h-12 w-12 items-center justify-center ${
              isCatalogueActive
                ? 'rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-2'
                : ''
            }`}
          >
            <button
              type="button"
              onClick={() => handleNavigation(ApplicationRoutes.catalogue)}
            >
              <Brackets
                className="rotate-90"
                color={isCatalogueActive ? 'white' : '#788ac8'}
              />
            </button>
          </div>

          <div
            className={` flex h-12 w-12 items-center justify-center ${
              isHistoryActive
                ? 'rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-2'
                : ''
            }`}
          >
            <button
              type="button"
              onClick={() => handleNavigation(ApplicationRoutes.history)}
            >
              <History color={isHistoryActive ? 'white' : '#788ac8'} />
            </button>
          </div>

          <button type="button" className="cursor-not-allowed">
            <AlignJustify color="#788ac8" />
          </button>
        </footer>
      )}
    </>
  )
}

import { useNavigate } from 'react-router-dom'
import {
  Battery,
  Brackets,
  Home,
  SignalHigh,
  Wifi,
  History,
  AlignJustify,
} from 'lucide-react'
import ApplicationRoutes from './utils/navigation/applicationRoutes'
import AppRoutes from './routes/AppRoutes'

function App() {
  const navigate = useNavigate()

  const isHomeActive = location.pathname === '/'
  const isCatalogueActive = location.pathname === '/catalogue'
  const isHistoryActive = location.pathname === '/history'

  function handleNavigation(path: string) {
    navigate(path)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[425px] flex-col items-center bg-gradient-to-r from-blue-900 to-gray-700 px-6 py-2">
      <div className="flex w-full items-center justify-between">
        <small className="text-sm font-bold text-white">9:41</small>

        <div className="flex items-center justify-center gap-1">
          <SignalHigh color="white" size={20} />
          <Wifi color="white" size={20} />
          <Battery color="white" fill="white" size={20} className="ml-1" />
        </div>
      </div>

      <AppRoutes />

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

        <button type="button" className="">
          <AlignJustify color="#788ac8" />
        </button>
      </footer>
    </div>
  )
}

export default App

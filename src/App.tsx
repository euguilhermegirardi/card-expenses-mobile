import { Battery, SignalHigh, Wifi } from 'lucide-react'
import Header from './components/Header'

function App() {
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

      <Header title="Bank Cards" />
    </div>
  )
}

export default App

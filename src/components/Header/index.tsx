import { Battery, SignalHigh, Wifi } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex justify-between">
      <small className="text-sm font-bold text-white">9:41</small>

      <div className="flex items-center justify-center gap-1">
        <SignalHigh color="white" size={20} />
        <Wifi color="white" size={20} />
        <Battery color="white" fill="white" size={20} className="ml-1" />
      </div>
    </header>
  )
}

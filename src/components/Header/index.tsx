import Avatar from '../../assets/avatar.png'

export default function Header({ title = 'Bank Cards' }: { title: string }) {
  return (
    <div className="mt-12 flex w-full items-center justify-between text-white">
      <h2 className="max-w-[167px] text-3xl font-bold">{title}</h2>
      <img className="h-8 w-8 rounded-full " src={Avatar} alt="avatar.png" />
    </div>
  )
}

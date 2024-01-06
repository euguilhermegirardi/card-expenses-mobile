import { MoveLeft } from 'lucide-react'
import Avatar from '../../assets/avatar.png'

export default function Header({
  title,
  arrow,
  firstExpandSalaryCard,
  handleGoBack,
}: {
  title: string
  arrow?: boolean
  firstExpandSalaryCard?: boolean
  handleGoBack?: () => void
}) {
  return (
    <div
      className={
        arrow
          ? 'mt-6 flex w-full cursor-pointer flex-col gap-2 px-6 text-white'
          : 'mt-[56px] flex w-full flex-col gap-2 px-6 text-white'
      }
    >
      {arrow ? (
        <div className="flex items-center justify-center">
          <div className="flex h-6 w-full flex-1 items-center">
            <MoveLeft color="white" size={35} onClick={handleGoBack} />
          </div>

          {firstExpandSalaryCard ? (
            <div className="flex-2 flex w-full items-center justify-center pr-[40px]">
              <h4 className="font-bold text-white">Salary Card</h4>
            </div>
          ) : null}
        </div>
      ) : null}

      {!firstExpandSalaryCard ? (
        <div className="flex w-full items-start justify-between">
          <h2 className="max-w-[167px] text-3xl font-bold">{title}</h2>
          <img
            className="h-8 w-8 rounded-full "
            src={Avatar}
            alt="avatar.png"
          />
        </div>
      ) : null}
    </div>
  )
}

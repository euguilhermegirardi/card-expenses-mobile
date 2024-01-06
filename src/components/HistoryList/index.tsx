import { data, HistoryType } from '../../utils/data/data'
import { gradientClasses, iconMappings } from '../../utils/icons/icons'

export function HistoryList() {
  return (
    <>
      {data[0].history.map((each: HistoryType) => (
        <div
          key={each.id}
          className="mt-5 flex items-center justify-between border-b border-[#00000057] pb-2"
        >
          <div className="flex">
            <div
              className={`rounded-full p-[0.65rem] ${
                gradientClasses[each.type]
              }`}
            >
              {iconMappings[each.type]}
            </div>

            <div className="flex flex-col items-start justify-center pl-3">
              <p className="text-sm font-semibold text-white">{each.title}</p>
              <span className="text-xs font-medium text-[#788ac8]">
                {each.description}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <span className="text-sm font-semibold text-white">
              {each.value}
            </span>
          </div>
        </div>
      ))}
    </>
  )
}

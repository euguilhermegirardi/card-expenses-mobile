import React from 'react'
import { HistoryType, data } from '../../utils/data/data'
import Header from '../Header'
import { CarFront, CornerUpRight, Music2 } from 'lucide-react'

type IconMappings = {
  [key: string]: React.ReactElement
}

export default function History() {
  const iconMappings: IconMappings = {
    card: React.createElement(CornerUpRight, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
    music: React.createElement(Music2, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
    uber: React.createElement(CarFront, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
  }

  const gradientClasses: { [key: string]: string } = {
    card: 'bg-[#ff00f3]',
    music: 'bg-[#ffd600]',
    uber: 'bg-[#1800ff]',
  }

  return (
    <>
      <Header title="Catalogue" />

      <div className="mt-5 flex w-full flex-col">
        <p className="text-sm font-semibold text-white">20 April</p>

        {data[0].history.map((each: HistoryType) => (
          <div
            key={each.id}
            className="mt-5 flex items-center justify-between border-b border-[#788ac8] pb-2 "
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
      </div>
    </>
  )
}

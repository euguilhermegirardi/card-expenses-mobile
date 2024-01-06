import { Phone, Wifi, CarFront, Home, Zap } from 'lucide-react'
import Header from '../Header'
import { CatalogueType, data } from '../../utils/data/data'
import React from 'react'
import Footer from '../Footer'

type IconMappings = {
  [key: string]: React.ReactElement
}

export default function Catalogue() {
  const iconMappings: IconMappings = {
    mobile: React.createElement(Phone, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
    internet: React.createElement(Wifi, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
    traffic: React.createElement(CarFront, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
    housing: React.createElement(Home, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
    utility: React.createElement(Zap, {
      size: 15,
      color: 'white',
      fill: 'white',
    }),
  }

  return (
    <>
      <Header title="Catalogue" />

      {data[0].catalogue.map((each: CatalogueType) => (
        <div
          key={each.id}
          className="mt-5 flex w-[90%] items-center justify-between border-b border-[#00000057] pb-2"
        >
          <div className="rounded-full bg-gradient-to-tr from-blue-700 to-blue-300 p-[0.65rem]">
            {iconMappings[each.type]}
          </div>

          <div className="flex w-full flex-col items-start justify-center pl-3">
            <p className="text-sm font-semibold text-white">{each.title}</p>
            <span className="text-xs font-medium text-[#788ac8]">
              {each.description}
              <span className="font-bold">{each.value}</span>
            </span>
          </div>

          <div
            className={
              each.pay === 'inactive'
                ? 'flex items-center justify-center rounded-lg border border-[#93c5fd87] px-5 py-2 opacity-20'
                : 'flex items-center justify-center rounded-lg border border-[#93c5fd87] px-5 py-2'
            }
          >
            <span className="text-sm font-semibold text-[#3b82f6c2]">Pay</span>
          </div>
        </div>
      ))}

      <Footer />
    </>
  )
}

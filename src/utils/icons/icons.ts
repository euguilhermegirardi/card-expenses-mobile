import { CarFront, CornerUpRight, Music2 } from 'lucide-react'
import React from 'react'

type IconMappings = {
  [key: string]: React.ReactElement
}

export const iconMappings: IconMappings = {
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

export const gradientClasses: { [key: string]: string } = {
  card: 'bg-[#ff00f3]',
  music: 'bg-[#ffd600]',
  uber: 'bg-[#1800ff]',
}

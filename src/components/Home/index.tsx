import Header from '../Header'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import '../../../node_modules/swiper/swiper-bundle.css'
import Black from '../../assets/black.png'
import Blue from '../../assets/blue.png'

export default function Home() {
  const [firstCardCentered, setFirstCardCenteredCentered] = useState(true)
  const [showFirstCard, setShowFirstCard] = useState(false)
  const [secondCardCentered, setSecondCardCenteredCentered] = useState(false)
  const [showSecondCard, setShowSecondCard] = useState(false)

  const cardWidth = 210
  const cardHeight = 330

  const calcLeftPosition = () =>
    firstCardCentered
      ? `calc(50% - ${cardWidth / 2}px)`
      : `calc(100% - ${cardWidth}px)`

  const firstCardProps = useSpring({
    left: calcLeftPosition(),
    width: firstCardCentered ? cardWidth : cardWidth * 0.45,
    height: cardHeight,
    zIndex: firstCardCentered ? 2 : 0,
    transform: showFirstCard
      ? 'translateX(0%) rotate(90deg)'
      : 'translateX(0%) rotate(0deg)',
    opacity: showSecondCard ? '0' : '1',
  })

  const calcRightPosition = () =>
    secondCardCentered
      ? `calc(50% - ${cardWidth / 2}px)`
      : `calc(100% - ${cardWidth}px)`

  const secondCardProps = useSpring({
    right: calcRightPosition(),
    width: secondCardCentered ? cardWidth : cardWidth * 0.45,
    height: cardHeight,
    zIndex: secondCardCentered ? 2 : 0,
    transform: showSecondCard
      ? 'translateX(0%) rotate(90deg)'
      : 'translateX(0%) rotate(0deg)',
    opacity: showFirstCard ? '0' : '1',
  })

  const handleFirstCardClick = () => {
    if (!firstCardCentered) {
      setFirstCardCenteredCentered((prevCentered) => !prevCentered)
      setSecondCardCenteredCentered((prevCentered) => !prevCentered)
    }

    if (firstCardCentered) {
      setShowFirstCard((prevShowFirstCard) => !prevShowFirstCard)
    }
  }

  const handleSecondCardClick = () => {
    if (!secondCardCentered) {
      setSecondCardCenteredCentered((prevCentered) => !prevCentered)
      setFirstCardCenteredCentered((prevCentered) => !prevCentered)
    }
    if (secondCardCentered) {
      setShowSecondCard((prevShowSecondCard) => !prevShowSecondCard)
    }
  }

  return (
    <>
      <Header title="Bank Cards" />

      <div className="flex w-full flex-col items-start">
        <p className="font-bold text-[#788ac8]">Balance</p>
        <small className="text-2xl font-bold text-white">$2,748.00</small>
      </div>

      <div className="relative mt-5">
        <animated.div
          className="absolute cursor-pointer"
          style={firstCardProps}
          onClick={handleFirstCardClick}
        >
          <img src={Black} alt="credit-card-black.png" />
        </animated.div>

        <animated.div
          className="absolute cursor-pointer"
          style={secondCardProps}
          onClick={handleSecondCardClick}
        >
          <img src={Blue} alt="credit-card-black.png" />
        </animated.div>
      </div>

      <div className="absolute bottom-[100px] flex w-28 justify-between">
        <div
          className="h-1 w-10 rounded-md bg-white"
          onClick={handleFirstCardClick}
        />
        <div
          className="h-1 w-10 rounded-md bg-white"
          onClick={handleSecondCardClick}
        />
      </div>
    </>
  )
}

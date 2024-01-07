import Header from '../Header'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import '../../../node_modules/swiper/swiper-bundle.css'
import Black from '../../assets/black.png'
import Blue from '../../assets/blue.png'
import Footer from '../Footer'
import { Forward, History } from 'lucide-react'
import { HistoryList } from '../HistoryList'
import { data } from '../../utils/data/data'

export default function Home() {
  const [firstCardCentered, setFirstCardCenteredCentered] = useState(true)
  const [showFirstCard, setShowFirstCard] = useState(false)
  const [horizontalFirstCard, setHorizontalFirstCard] = useState(false)
  const [secondCardCentered, setSecondCardCenteredCentered] = useState(false)
  const [showSecondCard, setShowSecondCard] = useState(false)
  const [horizontalSecondCard, setHorizontalSecondCard] = useState(false)
  const [firstExpandSalaryCard, setFirstExpandSalaryCard] = useState(false)
  const [secondExpandSalaryCard, setSecondExpandSalaryCard] = useState(false)

  const cardWidth = 210
  const cardHeight = 330
  const baseClassName = 'flex w-full flex-col'

  const additionalClassName =
    showFirstCard || showSecondCard
      ? 'mt-[270px] items-center justify-between'
      : ''

  const expandedAdditionalClass = secondExpandSalaryCard
    ? 'mt-[2.5rem] items-center justify-between'
    : ''

  const combinedClassName = `${baseClassName} ${
    secondExpandSalaryCard ? expandedAdditionalClass : additionalClassName
  }`

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
      ? 'translateX(0%) rotate(90deg'
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

  function handleFirstCardClick() {
    if (!firstCardCentered && !horizontalFirstCard) {
      setFirstCardCenteredCentered((prevCentered) => !prevCentered)
      setSecondCardCenteredCentered((prevCentered) => !prevCentered)
    } else if (firstCardCentered) {
      setShowFirstCard(true)
      setHorizontalFirstCard(true)
    }
  }

  function handleSecondCardClick() {
    if (!secondCardCentered && !horizontalSecondCard) {
      setSecondCardCenteredCentered((prevCentered) => !prevCentered)
      setFirstCardCenteredCentered((prevCentered) => !prevCentered)
    } else if (secondCardCentered) {
      setShowSecondCard(true)
      setHorizontalSecondCard(true)
    }
  }

  function handleGoBack() {
    setShowFirstCard(false)
    setShowSecondCard(false)
    setHorizontalFirstCard(false)
    setHorizontalSecondCard(false)
    setFirstExpandSalaryCard(false)
    setSecondExpandSalaryCard(false)
  }

  function handleExpandSalaryHistory() {
    if (!firstExpandSalaryCard) {
      setFirstExpandSalaryCard(true)
    } else if (firstExpandSalaryCard) {
      setSecondExpandSalaryCard(true)
    }
  }

  return (
    <>
      <Header
        title={showFirstCard || showSecondCard ? 'Salary Card' : 'Bank Cards'}
        arrow={showFirstCard || showSecondCard}
        firstExpandSalaryCard={firstExpandSalaryCard}
        handleGoBack={handleGoBack}
      />

      {showFirstCard || showSecondCard ? null : (
        <div className="flex w-full flex-col items-start px-6">
          <p className="font-bold text-[#788ac8]">Balance</p>
          <small className="text-2xl font-bold text-white">$2,748.00</small>
        </div>
      )}

      {!secondExpandSalaryCard ? (
        <div
          className={
            showFirstCard || showSecondCard ? 'relative' : 'relative mt-5'
          }
        >
          <animated.div
            className="absolute cursor-pointer"
            style={firstCardProps}
            onClick={handleFirstCardClick}
          >
            <img
              className={showFirstCard || showSecondCard ? 'ml-[-2rem]' : ''}
              src={Black}
              alt="credit-card-black.png"
            />
          </animated.div>

          <animated.div
            className="absolute cursor-pointer"
            style={secondCardProps}
            onClick={handleSecondCardClick}
          >
            <img
              className={showFirstCard || showSecondCard ? 'ml-[-2rem]' : ''}
              src={Blue}
              alt="credit-card-black.png"
            />
          </animated.div>
        </div>
      ) : null}

      {showFirstCard || showSecondCard ? (
        <div className={combinedClassName}>
          {!secondExpandSalaryCard ? (
            <div className="mb-2 flex w-full items-start justify-between px-6">
              <div className="flex flex-col">
                <p className="font-bold text-[#788ac8]">Balance</p>
                <small className="text-2xl font-bold text-white">
                  $2,748.00
                </small>
              </div>

              <div className="flex h-14 items-center justify-center gap-4">
                <History
                  color="white"
                  className="h-25 w-25 rounded-md border p-1"
                  size={30}
                />
                <Forward
                  color="white"
                  className="h-25 w-25 rounded-md border p-1"
                  size={30}
                />
              </div>
            </div>
          ) : null}

          <div className="w-full rounded-tl-[2.8rem] rounded-tr-[2.8rem] bg-[#2a3766] px-8 py-4">
            <div
              className="flex h-3 w-full cursor-pointer items-center justify-center"
              onClick={handleExpandSalaryHistory}
            >
              <div className="h-[2px] w-10 rounded-md bg-gray-400" />
            </div>

            <HistoryList data={data[0].salaryHistory} />
          </div>
        </div>
      ) : null}

      {showFirstCard || showSecondCard ? null : (
        <div className="absolute bottom-[100px] flex w-28 justify-between">
          <div
            className="h-1 w-10 cursor-pointer rounded-md bg-white"
            onClick={handleFirstCardClick}
          />
          <div
            className="h-1 w-10 cursor-pointer rounded-md bg-white"
            onClick={handleSecondCardClick}
          />
        </div>
      )}

      <Footer isFooterVisible={showFirstCard || showSecondCard} />
    </>
  )
}

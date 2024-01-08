import { useState } from 'react'
import { Forward, History } from 'lucide-react'
import { useSpring, animated } from 'react-spring'
import '../../../node_modules/swiper/swiper-bundle.css'
import Header from '../Header'
import Footer from '../Footer'
import Black from '../../assets/black.png'
import Blue from '../../assets/blue.png'
import { HistoryList } from '../HistoryList'
import { data } from '../../utils/data/data'
import { InitialStateT } from './interfaces/initialState'

const initialState: InitialStateT = {
  firstCardCentered: true,
  showFirstCard: false,
  horizontalFirstCard: false,
  secondCardCentered: false,
  showSecondCard: false,
  horizontalSecondCard: false,
  firstExpandSalaryCard: false,
  secondExpandSalaryCard: false,
}

export default function Home() {
  const [cards, setCards] = useState(initialState)

  const cardWidth = 210
  const cardHeight = 330
  const baseClassName = 'flex w-full flex-col absolute max-w-[450px] bottom-0'

  const additionalClassName =
    cards.showFirstCard || cards.showSecondCard
      ? 'items-center justify-between'
      : ''

  const expandedAdditionalClass = cards.secondExpandSalaryCard
    ? 'mt-[2.5rem] items-center justify-between'
    : ''

  const combinedClassName = `${baseClassName} ${
    cards.secondExpandSalaryCard ? expandedAdditionalClass : additionalClassName
  }`

  const calcLeftPosition = () =>
    cards.firstCardCentered
      ? `calc(50% - ${cardWidth / 2}px)`
      : `calc(100% - ${cardWidth}px)`

  const firstCardProps = useSpring({
    left: calcLeftPosition(),
    width: cards.firstCardCentered ? cardWidth : cardWidth * 0.45,
    height: cardHeight,
    zIndex: cards.firstCardCentered ? 2 : 0,
    transform: cards.showFirstCard
      ? 'translateX(0%) rotate(90deg'
      : 'translateX(0%) rotate(0deg)',
    opacity: cards.showSecondCard ? '0' : '1',
  })

  const calcRightPosition = () =>
    cards.secondCardCentered
      ? `calc(50% - ${cardWidth / 2}px)`
      : `calc(100% - ${cardWidth}px)`

  const secondCardProps = useSpring({
    right: calcRightPosition(),
    width: cards.secondCardCentered ? cardWidth : cardWidth * 0.45,
    height: cardHeight,
    zIndex: cards.secondCardCentered ? 2 : 0,
    transform: cards.showSecondCard
      ? 'translateX(0%) rotate(90deg)'
      : 'translateX(0%) rotate(0deg)',
    opacity: cards.showFirstCard ? '0' : '1',
  })

  function handleFirstCardClick() {
    if (!cards.firstCardCentered && !cards.horizontalFirstCard) {
      setCards((prevCards) => ({
        ...prevCards,
        firstCardCentered: !cards.firstCardCentered,
        secondCardCentered: !cards.secondCardCentered,
      }))
    } else if (cards.firstCardCentered) {
      setCards((prevCards) => ({
        ...prevCards,
        showFirstCard: true,
        horizontalFirstCard: true,
      }))
    }
  }

  function handleSecondCardClick() {
    if (!cards.secondCardCentered && !cards.horizontalSecondCard) {
      setCards((prevCards) => ({
        ...prevCards,
        secondCardCentered: !cards.secondCardCentered,
        firstCardCentered: !cards.firstCardCentered,
      }))
    } else if (cards.secondCardCentered) {
      setCards((prevCards) => ({
        ...prevCards,
        showSecondCard: true,
        horizontalSecondCard: true,
      }))
    }
  }

  function handleGoBack() {
    setCards(initialState)
  }

  function handleExpandSalaryHistory() {
    if (!cards.firstExpandSalaryCard) {
      setCards((prevCards) => ({
        ...prevCards,
        firstExpandSalaryCard: true,
      }))
    } else if (cards.firstExpandSalaryCard) {
      setCards((prevCards) => ({
        ...prevCards,
        secondExpandSalaryCard: true,
      }))
    }
  }

  return (
    <>
      <Header
        title={
          cards.showFirstCard || cards.showSecondCard
            ? 'Salary Card'
            : 'Bank Cards'
        }
        arrow={cards.showFirstCard || cards.showSecondCard}
        firstExpandSalaryCard={cards.firstExpandSalaryCard}
        handleGoBack={handleGoBack}
      />

      {cards.showFirstCard || cards.showSecondCard ? null : (
        <div className="flex w-full flex-col items-start px-6">
          <p className="font-bold text-[#788ac8]">Balance</p>
          <small className="text-2xl font-bold text-white">$2,748.00</small>
        </div>
      )}

      {!cards.secondExpandSalaryCard ? (
        <div
          className={
            cards.showFirstCard || cards.showSecondCard
              ? 'relative'
              : 'relative mt-5'
          }
        >
          <animated.div
            className="absolute cursor-pointer"
            style={firstCardProps}
            onClick={handleFirstCardClick}
          >
            <img
              className={
                cards.showFirstCard || cards.showSecondCard ? 'ml-[-2rem]' : ''
              }
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
              className={
                cards.showFirstCard || cards.showSecondCard ? 'ml-[-2rem]' : ''
              }
              src={Blue}
              alt="credit-card-black.png"
            />
          </animated.div>
        </div>
      ) : null}

      {cards.showFirstCard || cards.showSecondCard ? (
        <div className={combinedClassName}>
          {!cards.secondExpandSalaryCard ? (
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

            <HistoryList
              data={data[0].salaryHistory}
              isShowCard={cards.showFirstCard || cards.showSecondCard}
              isFirstExpandedSalary={cards.firstExpandSalaryCard}
              isFullExpanded={cards.secondExpandSalaryCard}
            />
          </div>
        </div>
      ) : null}

      {cards.showFirstCard || cards.showSecondCard ? null : (
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

      <Footer isFooterVisible={cards.showFirstCard || cards.showSecondCard} />
    </>
  )
}

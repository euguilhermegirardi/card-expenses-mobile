import Header from '../Header'
import Footer from '../Footer'
import { HistoryList } from '../HistoryList'
import { data } from '../../utils/data/data'

export default function History() {
  return (
    <>
      <Header title="History" />

      <div className="mt-5 flex w-full flex-col px-6">
        <p className="text-sm font-semibold text-white">20 April</p>

        <HistoryList data={data[0].history} />
      </div>

      <Footer />
    </>
  )
}

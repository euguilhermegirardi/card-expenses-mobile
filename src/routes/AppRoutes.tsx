import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Catalogue from '../components/Catalogue'
import History from '../components/History'
import ApplicationRoutes from '../utils/navigation/applicationRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ApplicationRoutes.home} element={<Home />} />
      <Route path={ApplicationRoutes.catalogue} element={<Catalogue />} />
      <Route path={ApplicationRoutes.history} element={<History />} />
    </Routes>
  )
}

export default AppRoutes

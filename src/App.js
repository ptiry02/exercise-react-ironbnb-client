import { Route, Routes } from 'react-router-dom'
import ApartmentDetails from './components/ApartmentDetails'
import ApartmentsList from './components/ApartmentsList'
import CreateApartment from './components/CreateApartment'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
        <Route path="/create" element={<CreateApartment />} />
      </Routes>
    </>
  )
}

export default App

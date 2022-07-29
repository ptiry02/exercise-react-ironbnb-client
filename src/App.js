import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import ApartmentsList from './components/ApartmentsList'
import CreateApartment from './components/CreateApartment'
import Navbar from './components/Navbar'

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<ApartmentsList />} />
        <Route path="/apartments/new" element={<CreateApartment />} />
      </Routes>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`

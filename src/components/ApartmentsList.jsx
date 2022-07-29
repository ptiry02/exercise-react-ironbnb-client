import { useApartments } from '../hooks/useApartments'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ApartmentsList = () => {
  const { apartmentsList, isLoading } = useApartments()
  return (
    <>
      <h1>Apartments</h1>
      {isLoading ? (
        <ReactLoading type="spinningBubbles" color="#cec8db" width="10%" />
      ) : (
        apartmentsList?.map((ap) => (
          <Card key={ap._id}>
            <Link to={`/apartments/${ap._id}`}>
              {ap.img && <img src={ap.img} alt={ap._id} />}
              <h3>{ap.title}</h3>
            </Link>
            <p>Price: {ap.pricePerDay}</p>
          </Card>
        ))
      )}
    </>
  )
}

export default ApartmentsList

const Card = styled.div`
  width: 400px;
  padding: 10px;
  box-shadow: 0px 2px 3px grey;
  margin: 0 auto;
  margin-bottom: 20px;
  background: #cfb2d6;
  border-radius: 4px;
  img {
    max-width: 50%;
  }
`

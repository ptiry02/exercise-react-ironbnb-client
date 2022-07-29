import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useApartments } from '../hooks/useApartments'

const ApartmentDetails = () => {
  const { id } = useParams()
  const { fetchApartmentDetails, details } = useApartments()

  useEffect(() => {
    fetchApartmentDetails(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Card>
      <h1>{details?.title}</h1>
      {details?.img && <img src={details?.img} alt={details?._id} />}
      <p>Price: {details?.pricePerDay}€/day</p>
    </Card>
  )
}

export default ApartmentDetails
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

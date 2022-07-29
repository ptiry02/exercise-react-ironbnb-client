import { useState } from 'react'
import styled from 'styled-components'
import { useApartments } from '../hooks/useApartments'

const CreateApartment = () => {
  const defaultApartment = { title: '', img: 'https://homes.madeeasy.app/img/no-propertyfound.png', pricePerDay: 0 }
  const [apartInfo, setApartInfo] = useState(defaultApartment)
  const { addApartment } = useApartments()

  const handleSubmit = () => {
    addApartment(apartInfo)
    setApartInfo(defaultApartment)
  }

  return (
    <Wrapper>
      <h3>Add New Apartment</h3>
      <div>
        <label>Title</label>
        <input type="text" onChange={(e) => setApartInfo({ ...apartInfo, title: e.target.value })} value={apartInfo.title} />

        <label>Price per Day</label>
        <input type="number" onChange={(e) => setApartInfo({ ...apartInfo, pricePerDay: e.target.value })} value={apartInfo.pricePerDay} />
        <Button onClick={handleSubmit}>Create Apartment</Button>
      </div>
    </Wrapper>
  )
}

export default CreateApartment
const Wrapper = styled.div`
  border: 1px solid grey;
  box-shadow: 0px 2px 3px grey;
  width: 400px;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  background: #afd7fb;
  label {
    width: 100px;
    display: block;
    margin: 0 auto;
  }
  input,
  input[type='number'] {
    padding: 10px;
    display: inline-block;
    margin: 2px 0 10px;
  }
  input[type='number'] {
    text-align: center;
  }
`
const Button = styled.button`
  padding: 5px 10px;
  min-width: 50px;
  font-size: 18px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 3px;
`

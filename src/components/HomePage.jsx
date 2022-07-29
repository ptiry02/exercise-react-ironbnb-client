import styled from 'styled-components'
import ironhackersImg from '../assets/ironhackers.avif'

const HomePage = () => {
  return (
    <Wrapper>
      <h1>Welcome</h1>
      <img src={ironhackersImg} alt="ironhackers" />
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  text-align: center;
`

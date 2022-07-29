import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/apartments">Apartments</RouterLink>
        </li>
        <li>
          <RouterLink to="/create">Create Apartment</RouterLink>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #3a95e5;
  color: white;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    column-gap: 7%;
    min-width: 50%;
  }
`
const RouterLink = styled(Link)`
  color: white;
  :active {
    color: red;
  }
`

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <RouterLink to="/">
        <Button>Home</Button>
      </RouterLink>

      <RouterLink to="/apartments/new">
        <Button>Add Apartment</Button>
      </RouterLink>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  background: #cec8db;
  color: white;
  padding: 10px;
  box-shadow: 0px 1px 2px gray;
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`
const Button = styled.button`
  padding: 5px 10px;
  min-width: 50px;
  margin: 10px;
  font-size: 18px;
`
const RouterLink = styled(NavLink)`
  color: white;
  :active {
    color: red;
  }
`

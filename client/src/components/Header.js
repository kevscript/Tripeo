import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 800px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderNav = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  margin: 0 10px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
`

const HeaderLogo = styled.div`
  ${NavLink} {
    font-size: 36px;
    font-weight: 600;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <NavLink to='/'>TW</NavLink>
      </HeaderLogo>
      <HeaderNav>
        <NavItem>
          <NavLink to='/'>Your Trips</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/'>Add Trip</NavLink>
        </NavItem>
      </HeaderNav>
    </HeaderContainer>
  )
}

export default Header
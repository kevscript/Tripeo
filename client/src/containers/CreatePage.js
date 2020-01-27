import React from 'react'
import styled from 'styled-components'
import TripForm from '../components/TripForm'
import Button from '../components/Button'
import CheckpointsList from '../components/CheckpointsList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openForm } from '../actions'
import Logo from '../assets/icons/sunset.svg'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  flex-direction: column;
  background: #fff;
  display: flex;
  align-items: center;
`

const CheckpointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
`

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`

const HeaderTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
`

const HeaderButton = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border: ${props => `1px solid ${props.theme.colors.primary}`};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    border: 0;
    transform: scale(1.1) rotate(90deg);

    &::after {
      background: #fff;
      height: 3px;
    }

    &::before {
      background: #fff;
      width: 3px;
    }
  }

  &::after {
    display: block;
    position: absolute;
    content: '';
    width: 25px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
  }

  &::before {
    display: block;
    position: absolute;
    content: '';
    width: 2px;
    height: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  z-index: 2;
`

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

const LogoContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const LogoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const CreatePage = ({ trip, form, openForm }) => {
  const { opened } = form
  const { checkpoints } = trip

  const handleFormOpen = () => {
    openForm()
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoImg src={Logo} />
        </LogoContainer>
        <HeaderTitle>Roadmap</HeaderTitle>
        <HeaderButton onClick={handleFormOpen} />
      </Header>
      {checkpoints.length > 0 &&
        <CheckpointsContainer>
          <CheckpointsList checkpoints={checkpoints} />
        </CheckpointsContainer>
      }
      {checkpoints.length > 0 && opened === false &&
        <ButtonContainer>
          <Button big>
            <ButtonLink to='/weather'>
              Forecast
            </ButtonLink>
          </Button>
        </ButtonContainer>
      }

      {opened && <TripForm />}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  trip: state.trip,
  form: state.form
})

const mapDispatchToProps = {
  openForm
}

CreatePage.propTypes = {
  trip: PropTypes.object,
  form: PropTypes.object,
  openForm: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)
import React, { useState, useRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import WelcomePage from './WelcomPage'
import CreatePage from './CreatePage'

const App = () => {
  const tripNameRef = useRef(null)
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [trip, setTrip] = useState([])

  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  const handleLocation = (e) => {
    setLocation({ ...e.suggestion })
  }

  const handleFormSubmit = () => {
    if (location && startDate && endDate && tripNameRef.current.value) {
      setTrip([...trip, {
        location: { ...location },
        from: startDate,
        to: endDate
      }])
      setLocation('')
      setStartDate('')
      setEndDate('')
    }
  }

  return (
    <div>
      <GlobalStyle />

      <Switch>

        <Route exact path="/"
          render={() => (
            <WelcomePage />
          )}
        />

        <Route path='/create'
          render={() => (
            <CreatePage
              tripNameRef={tripNameRef}
              location={location}
              trip={trip}
              startDate={startDate}
              endDate={endDate}
              handleStartDateChange={handleStartDateChange}
              handleEndDateChange={handleEndDateChange}
              handleLocation={handleLocation}
              handleFormSubmit={handleFormSubmit}
            />
          )}
        />

      </Switch>

    </div>
  );
}

export default App

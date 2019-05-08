import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import WelcomePage from './WelcomPage'
import CreatePage from './CreatePage'

const App = () => {

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
    setLocation({name: e.suggestion.value, coord: e.suggestion.latlng})
  }

  const handleFormSubmit = () => {
    setTrip([...trip, {
      location, 
      from: startDate, 
      to: endDate
    }])
    setLocation('')
    setStartDate('')
    setEndDate('')
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

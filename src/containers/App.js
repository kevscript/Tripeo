import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import WelcomePage from './WelcomPage'
import CreatePage from './CreatePage'

const App = () => {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
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
              startDate={startDate}
              endDate={endDate}
              handleStartDateChange={handleStartDateChange}
              handleEndDateChange={handleEndDateChange}
            />
          )}
        />

      </Switch>

    </div>
  );
}

export default App

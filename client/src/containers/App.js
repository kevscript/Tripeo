import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import WelcomePage from './WelcomPage'
import CreatePage from './CreatePage'
import WeatherPage from './WeatherPage'

const App = () => {

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
            <CreatePage/>
          )}
        />

        <Route path='/weather'
          render={() => (
            <WeatherPage/>
          )}
        />

      </Switch>

    </div>
  );
}

export default App

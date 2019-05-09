import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import WelcomePage from './WelcomPage'
import CreatePage from './CreatePage'

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

      </Switch>

    </div>
  );
}

export default App

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// router setup
import { BrowserRouter } from 'react-router-dom'

// redux setup
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// style setup
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

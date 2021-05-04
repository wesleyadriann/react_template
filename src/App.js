import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { persistor, store } from './store'

import Routes from './routes'

import { GlobalStyle, theme } from './style'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)

export default App

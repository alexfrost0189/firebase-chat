import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Chat from './components/Chat'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.2;
    color: #222;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Chat />
    </>
  )
}

export default App

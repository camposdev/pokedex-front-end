import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Prompt', sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  input,
  button {
    font-family: 'Prompt', sans-serif;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles

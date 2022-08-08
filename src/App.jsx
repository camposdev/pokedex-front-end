import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Container from './components/Container'
import Header from './components/Header/Header'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="theme-color" content="#FF5656" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />

      <Header />

      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App

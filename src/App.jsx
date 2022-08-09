import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled, { ThemeProvider } from 'styled-components'
import { palette } from 'styled-tools'
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
import 'react-toastify/dist/ReactToastify.min.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadPokedex } from './store/pokedexSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPokedex())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="theme-color" content={theme.palette.red} />
        <title>Pokedex</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />

      <Header />

      <S.Wrapper>
        <Container>
          <Outlet />
        </Container>
      </S.Wrapper>

      <Footer />

      <ToastContainer position="top-center" pauseOnHover={false} />
    </ThemeProvider>
  )
}

const S = {}

// Wraps the content to overlay footer
S.Wrapper = styled.main`
  background-color: ${palette('white')};
  margin-bottom: 125px;
  padding-bottom: 30px;
`

export default App

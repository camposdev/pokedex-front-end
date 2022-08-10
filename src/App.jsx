import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled, { ThemeProvider } from 'styled-components'
import { palette } from 'styled-tools'
import { Container, Footer, Header } from './components'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
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

import styled from 'styled-components'
import { palette } from 'styled-tools'

const Footer = () => {
  return (
    <S.Footer>
      <a href="https://github.com/camposdev" target="_blank" rel="noreferrer">
        Pokedex by Felipe Campos
      </a>
    </S.Footer>
  )
}

export default Footer

const S = {}

S.Footer = styled.footer`
  position: fixed;
  z-index: -2;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background-color: ${palette('black')};
  color: ${palette('white')};
  text-align: center;
  border-top: 5px solid ${palette('red')};

  a {
    font-size: 1.2rem;
    color: ${palette('white')};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

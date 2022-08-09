import styled from 'styled-components'
import { ifProp, palette, theme } from 'styled-tools'

const S = {}

S.Form = styled.form`
  position: relative;
  margin-bottom: 70px;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    display: block;
    width: ${ifProp('focused', '100%', '50%')};
    height: 2px;
    background-color: ${ifProp('focused', palette('black'), palette('black10'))};
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    &::before {
      width: ${ifProp('focused', '100%', '28%')};
    }
  }
`

S.Input = styled.input`
  width: 100%;
  font-size: 3.5rem;
  border: 0;
  font-weight: 300;
  text-align: center;
  outline: none;

  &::placeholder {
    color: ${palette('black20')};
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    font-size: 4rem;
  }
`

S.FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default S

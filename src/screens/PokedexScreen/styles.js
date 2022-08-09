import styled from 'styled-components'
import { palette } from 'styled-tools'

const S = {}

S.TitleSection = styled.h2`
  margin: 0 0 40px;
  font-size: 4rem;
  text-align: center;
  font-weight: 700;

  small {
    display: block;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${palette('black50')};
  }
`

S.WrapCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default S

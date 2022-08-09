import styled from 'styled-components'
import { palette } from 'styled-tools'

const TitleSection = ({ children, ...props }) => {
  return (
    <S.TitleSection {...props}>
      <>{children}</>
    </S.TitleSection>
  )
}

export default TitleSection

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

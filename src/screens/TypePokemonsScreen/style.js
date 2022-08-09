import styled from 'styled-components'
import TitleSection from '../../components/TitleSection'

const S = {}

S.Title = styled(TitleSection)`
  text-transform: capitalize;
`

S.WrapCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default S

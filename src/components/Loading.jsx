import styled, { keyframes } from 'styled-components'
import pokeball from '../assets/images/pokeball.svg'

const Loading = () => {
  return (
    <S.Wrapper>
      <S.Pokeball src={pokeball} alt="pokeball" data-testid="pokeball" />
    </S.Wrapper>
  )
}

export default Loading

const S = {}

S.Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

S.Pokeball = styled.img`
  width: 50px;
  height: 50px;
  animation: ${rotate} 0.5s linear infinite;
`

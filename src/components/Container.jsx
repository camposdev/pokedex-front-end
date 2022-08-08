import styled from 'styled-components'

const Container = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>
}

export default Container

const S = {}

S.Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px;
`

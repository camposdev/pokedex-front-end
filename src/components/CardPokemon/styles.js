import styled from 'styled-components'

const S = {}

S.Card = styled.div`
  position: relative;
  width: 160px;
`

S.Number = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default S

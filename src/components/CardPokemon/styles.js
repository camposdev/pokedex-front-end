import styled, { css } from 'styled-components'
import { ifProp, palette, prop, theme } from 'styled-tools'
import Button from '../Button'

const S = {}

S.Light = styled.div`
  position: absolute;
  z-index: -1;
  top: 30px;
  left: 0;
  width: 140px;
  height: 140px;
  background-color: ${prop('color')};
  opacity: 0;
  border-radius: 50%;
  filter: blur(20px);
  transition: all 0.3s ease;

  @media (min-width: ${theme('breakpoints.sm')}) {
    width: 160px;
    height: 160px;
  }
`

S.Number = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  background: -webkit-linear-gradient(${prop('color')}, rgba(255, 255, 255, 0));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;
  transition: all 0.3s ease;

  @media (min-width: ${theme('breakpoints.sm')}) {
    font-size: 40px;
  }
`

S.Card = styled.div`
  position: relative;
  z-index: 1;
  width: 140px;
  padding-top: 30px;
  margin: 0 10px 30px;
  cursor: pointer;

  &:hover {
    ${S.Light} {
      opacity: 0.5;
    }

    ${S.Number} {
      top: -5px;
    }
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    margin: 0 20px 50px;
    width: 160px;
  }
`

S.Catch = styled.img`
  position: absolute;
  z-index: 2;
  width: 40px;
  top: 0px;
  left: 0;
  transition: all 0.3s ease;
  opacity: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

S.RemoveButton = styled(Button)`
  position: absolute;
  z-index: 3;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
`

S.Wrapper = styled.div`
  position: relative;

  &:hover {
    ${S.Catch} {
      top: 5px;
      opacity: ${ifProp('caught', '0.2', '1')};

      ${ifProp(
        'caught',
        css`
          z-index: 1;
          cursor: default;
          transform: scale(1);
        `
      )}
    }

    ${S.RemoveButton} {
      opacity: 1;
      bottom: 20px;
    }
  }

  ${S.RemoveButton} {
    display: ${ifProp('caught', 'block', 'none')};
  }

  ${S.Catch} {
    display: ${ifProp('caught', 'none', 'block')};
  }
`

S.Photo = styled.img`
  width: 100%;
  display: block;
`

S.Name = styled.h3`
  margin: -10px 0 0;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  text-transform: capitalize;
  height: 3rem;
  overflow: hidden;

  @media (min-width: ${theme('breakpoints.sm')}) {
    font-size: 2.4rem;
    height: 3.6rem;
  }
`

S.Types = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`

S.Type = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  text-transform: capitalize;
  color: ${palette('black50')};
  border-bottom: 5px solid ${prop('color')};
`

export default S

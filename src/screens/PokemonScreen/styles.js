import styled, { css, keyframes } from 'styled-components'
import { ifProp, palette, prop, theme } from 'styled-tools'
import { Button } from '../../components'
import CardPokemon from '../../components/CardPokemon'

const S = {}

S.TitleName = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20;
  margin-top: -30px;
  text-transform: capitalize;
  text-align: center;
  line-height: 1;

  span {
    font-weight: 300;
    color: ${palette('black20')};
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    font-size: 6rem;
  }
`

S.FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
  align-items: center;

  @media (min-width: ${theme('breakpoints.md')}) {
    flex-direction: row;
    justify-content: center;
  }
`

S.Catch = styled.img`
  position: absolute;
  width: 60px;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0;

  &:hover {
    transform: scale(1.1);
  }
`

S.RemoveButton = styled(Button)`
  position: absolute;
  z-index: 3;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
`

S.PhotoContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 360px;
  text-align: center;

  @media (min-width: ${theme('breakpoints.md')}) {
    margin-right: 15px;
  }

  &:hover {
    ${S.Catch} {
      cursor: ${ifProp('caught', 'default', 'pointer')};
      opacity: ${ifProp('caught', '0.2', '1')};

      &:hover {
        transform: scale(${ifProp('caught', '1', '1.1')});
      }
    }

    ${S.RemoveButton} {
      opacity: 1;
      bottom: -20px;
    }
  }

  ${S.Catch} {
    display: ${ifProp('caught', 'none', 'block')};
  }

  ${S.RemoveButton} {
    display: ${ifProp('caught', 'block', 'none')};
  }
`

S.BlurEffect = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: ${prop('color')};
  opacity: 0.5;
  transform: scale(0.8);
  filter: blur(50px);
`

S.Photo = styled.img`
  width: 100%;
  display: block;
`

S.Content = styled.div`
  position: relative;
  margin-top: 30px;

  @media (min-width: ${theme('breakpoints.md')}) {
    width: 360px;
    margin-top: 0;
    margin-left: 15px;
  }
`

S.DetailGroup = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: ${theme('breakpoints.md')}) {
    justify-content: flex-start;
  }
`

S.ItemDetail = styled.div`
  text-align: center;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }

  @media (min-width: ${theme('breakpoints.md')}) {
    text-align: left;
  }
`

S.TitleDetail = styled.h5`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${palette('black50')};
`

S.TextDetail = styled.span`
  display: inline-block;
  font-size: 2.4rem;
  font-weight: 300;
  color: ${palette('black')};
  margin-top: -5px;
  margin-left: 25px;
  text-transform: capitalize;
  cursor: ${ifProp('onClick', 'pointer', 'text')};

  ${ifProp(
    'link',
    css`
      &:hover {
        text-decoration: underline;
      }
    `
  )}

  ${ifProp(
    'type',
    css`
      border-left: 3px solid ${prop('color')};
      transition: all 0.3s ease;
      line-height: 1;
      padding-left: 5px;
      margin-top: 3px;
      &:hover {
        border-left-width: 6px;
      }
    `
  )}

  &:first-of-type {
    margin-left: 0;
  }
`

S.CardPokemon = styled(CardPokemon)`
  margin-bottom: 30px;

  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    display: block;
    width: 60px;
    height: 60px;
    background-image: url(${prop('arrow')});
    background-size: contain;
    opacity: 0.1;
    transform: rotate(90deg) translateY(50%);
  }

  &:last-of-type {
    margin-bottom: 0;

    &::after {
      display: none;
    }
  }

  @media (min-width: ${theme('breakpoints.md')}) {
    margin-right: 50px;
    margin-bottom: 0;

    &::after {
      top: 50%;
      left: auto;
      right: -60px;
      transform: rotate(0deg) translateY(-100%);
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

S.AbilityCard = styled.div`
  position: absolute;
  padding: 15px;
  background: ${palette('black')};
  color: ${palette('white')};
  border-radius: 10px;
  margin: -60px 0 20px;
  width: 100%;
  animation: ${show} 0.5s ease;

  h5 {
    font-size: 1.6rem;
    color: ${palette('white')};
    margin: 0 0 5px;
    text-transform: capitalize;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`

S.CloseAbility = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid ${palette('white')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 700;
  line-height: 0.2;
  color: ${palette('white')};
  cursor: pointer;
`

export default S

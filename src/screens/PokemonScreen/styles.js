import styled, { css } from 'styled-components'
import { ifProp, palette, prop, theme } from 'styled-tools'
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

S.PhotoContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 360px;
  text-align: center;

  @media (min-width: ${theme('breakpoints.md')}) {
    margin-right: 15px;
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

S.Catch = styled.img`
  position: absolute;
  width: 60px;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

S.Content = styled.div`
  margin-top: 30px;

  @media (min-width: ${theme('breakpoints.md')}) {
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

export default S

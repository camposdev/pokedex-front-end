import styled, { keyframes } from 'styled-components'
import { palette, theme } from 'styled-tools'
import Container from '../Container'

const S = {}

S.Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${palette('red')};
  height: 144px;
  border-bottom: 24px solid ${palette('black')};
  margin-bottom: 70px;

  &:before {
    content: '';
    position: absolute;
    bottom: -${144 / 2}px;
    left: 50%;
    margin-left: -60px;
    display: block;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 24px solid ${palette('black')};
    background-color: ${palette('white')};
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    height: 212px;
    border-bottom-width: 36px;
    margin-bottom: 100px;

    &:before {
      width: 126px;
      height: 126px;
      border-width: 36px;
      bottom: -${(212 + 36 / 2) / 2}px;
      margin-left: -${(126 + 36 + 36) / 2}px;
    }
  }
`

S.Logo = styled.img`
  position: absolute;
  left: 50%;
  top: -22px;
  margin-left: -${228 / 2}px;
  width: 228px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    margin-top: -5px;
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    top: -56px;
    width: 360px;
    margin-left: -${360 / 2}px;
  }
`

S.Pokeball = styled.img`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  margin-bottom: -38px;
  margin-left: -25px;
  width: 52px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(360deg);
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    width: 82px;
    margin-bottom: -58px;
    margin-left: -40px;
  }
`

const lightEffect = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0.5;
  }
  to {
    transform: scale(1.5);
    opacity: 0;
  }
`

S.EffectPokeball = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  margin-bottom: -38px;
  margin-left: -25px;
  width: 52px;
  height: 52px;

  @media (min-width: ${theme('breakpoints.sm')}) {
    width: 82px;
    height: 82px;
    margin-bottom: -57px;
    margin-left: -41px;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${palette('red')};
    border-radius: 50%;
    animation: ${lightEffect} 1.5s ease 0s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${palette('red')};
    border-radius: 50%;
    animation: ${lightEffect} 1.5s ease 0.5s infinite;
  }
`

S.PokedexIcon = styled.img`
  width: 60px;
  height: 60px;
  transition: all 0.3s ease;
`

S.PokedexMenu = styled.span`
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  margin-left: -10px;
  display: none;
  line-height: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${palette('white')};
    transition: all 0.3s ease;
  }

  small {
    display: block;
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media (min-width: ${theme('breakpoints.sm')}) {
    display: block;
  }
`
S.Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 4px 0;
  border-radius: 5px;
  background-color: ${palette('white')};
  color: ${palette('red')};
  font-weight: 700;
  font-size: 0.9rem;
`

S.Pokedex = styled.a`
  display: flex;
  align-items: center;
  color: ${palette('white')};
  cursor: pointer;

  &:hover {
    ${S.PokedexMenu} {
      &::before {
        width: 100%;
      }
    }

    ${S.PokedexIcon} {
      transform: rotate(-10deg);
    }
  }
`

S.Container = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

S.Github = styled.img`
  width: 40px;
  height: auto;
`

export default S

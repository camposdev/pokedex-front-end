import S from './styles'
import logo from '../../assets/images/pokemon_logo.png'
import pokedex from '../../assets/images/pokedex.png'
import pokeball from '../../assets/images/pokeball.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <S.Header>
      <S.Container>
        <S.Logo src={logo} alt="Pokemon" onClick={() => navigate('/')} />
        <S.Pokeball src={pokeball} alt="Pokeball" />

        <S.Pokedex onClick={() => navigate('pokedex')}>
          <S.PokedexIcon src={pokedex} alt="Pokedex" />
          <S.PokedexMenu>
            <small>Minha</small>
            Pokedex
            <S.Badge>12</S.Badge>
          </S.PokedexMenu>
        </S.Pokedex>
      </S.Container>
    </S.Header>
  )
}

export default Header

import S from './styles'
import logo from '../../assets/images/pokemon_logo.png'
import pokedexIcon from '../../assets/images/pokedex.png'
import pokeball from '../../assets/images/pokeball.svg'
import github from '../../assets/images/github.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const pokedex = useSelector((state) => state.pokedex.pokemons)

  const totalPokemons = pokedex?.length || 0

  const handleGetRandom = async () => {
    const random = Math.floor(Math.random() * 905) + 1
    navigate(`pokemon/${random}`)
  }

  return (
    <S.Header>
      <S.Container>
        <a href="https://github.com/camposdev/pokedex-front-end" target="_blank" rel="noreferrer">
          <S.Github src={github} alt="Github" />
        </a>

        <S.Logo src={logo} alt="Pokemon" onClick={() => navigate('/')} data-testid="logo" />

        <S.Pokeball
          src={pokeball}
          alt="Pokeball"
          onClick={handleGetRandom}
          data-testid="pokeball"
        />
        <S.EffectPokeball />

        <S.Pokedex onClick={() => navigate('pokedex')}>
          <S.PokedexIcon src={pokedexIcon} alt="Pokedex" />
          <S.PokedexMenu>
            <small>Minha</small>
            Pokedex
            <S.Badge data-testid="count-pokemons">{totalPokemons}</S.Badge>
          </S.PokedexMenu>
        </S.Pokedex>
      </S.Container>
    </S.Header>
  )
}

export default Header

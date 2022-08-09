import { useNavigate } from 'react-router-dom'
import typeColors from '../../api/typeColors'
import S from './styles'
import pokeball from '../../assets/images/pokeball.svg'
import { useDispatch, useSelector } from 'react-redux'
import { catchPokemon, removePokemon } from '../../store/pokedexSlice'

const CardPokemon = ({ data, ...props }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pokedex = useSelector((state) => state.pokedex.pokemons)

  const {
    name,
    id,
    types,
    sprites: { other }
  } = data

  const isCaught = pokedex?.includes(id)

  const handleCatch = () => {
    if (isCaught) return
    dispatch(catchPokemon(id))
  }

  const handleRemove = () => {
    dispatch(removePokemon(id))
  }

  return (
    <S.Wrapper caught={isCaught} {...props}>
      <S.Catch src={pokeball} alt="pokeball" title="Capturar" onClick={handleCatch} />

      <S.Card onClick={() => navigate(`/pokemon/${name}`)}>
        <S.Number color={typeColors[types[0].type.name]} data-testid="number">
          #{id.toString().padStart(3, '0')}
        </S.Number>

        <S.Photo src={other['official-artwork'].front_default} data-testid="photo" />
        <S.Light color={typeColors[types[0].type.name]} data-testid="light" />

        <S.Name data-testid="name" title={name}>
          {name}
        </S.Name>

        <S.Types>
          {types.map((type) => (
            <S.Type key={type.slot} color={typeColors[type.type.name]} data-testid="type">
              {type.type.name}
            </S.Type>
          ))}
        </S.Types>
      </S.Card>

      <S.RemoveButton onClick={handleRemove}>Remover</S.RemoveButton>
    </S.Wrapper>
  )
}

export default CardPokemon

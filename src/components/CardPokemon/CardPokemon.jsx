import { useNavigate } from 'react-router-dom'
import typeColors from '../../api/typeColors'
import S from './styles'
import pokeball from '../../assets/images/pokeball.svg'

const CardPokemon = ({ data, ...props }) => {
  const navigate = useNavigate()

  const {
    name,
    id,
    types,
    sprites: { other }
  } = data

  return (
    <S.Wrapper {...props}>
      <S.Catch src={pokeball} alt="pokeball" title="Catch it" />
      <S.Card onClick={() => navigate(`../pokemon/${name}`, { replace: true })}>
        <S.Number color={typeColors[types[0].type.name]} data-testid="number">
          #{id.toString().padStart(3, '0')}
        </S.Number>

        <S.Photo src={other['official-artwork'].front_default} data-testid="photo" />
        <S.Light color={typeColors[types[0].type.name]} data-testid="light" />

        <S.Name data-testid="name">{name}</S.Name>

        <S.Types>
          {types.map((type) => (
            <S.Type key={type.slot} color={typeColors[type.type.name]} data-testid="type">
              {type.type.name}
            </S.Type>
          ))}
        </S.Types>
      </S.Card>
    </S.Wrapper>
  )
}

export default CardPokemon

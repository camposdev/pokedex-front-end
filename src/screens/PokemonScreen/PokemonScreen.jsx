import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import typeColors from '../../api/typeColors'
import Loading from '../../components/Loading'
import { setLoading } from '../../store/loadingSlice'
import pokeball from '../../assets/images/pokeball.svg'
import arrow from '../../assets/images/arrow.png'
import S from './styles'

const PokemonScreen = () => {
  const [pokemon, setPokemon] = useState(null)
  const [evolutions, setEvolutions] = useState([])
  const { name } = useParams()
  const loading = useSelector((state) => state.loading.value)
  const dispatch = useDispatch()

  const fetchPokemon = async () => {
    try {
      dispatch(setLoading(true))
      const fetchPokemon = await api.getPokemonByNameOrNumber(name)
      setPokemon(fetchPokemon.data)
      const fetchEvolution = await api.getEvolutionChainBySpecies(fetchPokemon.data.species.url)
      setEvolutions(fetchEvolution)
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [name])

  return (
    <>
      {loading && <Loading />}

      {pokemon && !loading && (
        <>
          <S.TitleName>
            {pokemon.name} <span>#{pokemon.id.toString().padStart(3, '0')}</span>
          </S.TitleName>

          <S.FlexContent>
            <S.PhotoContent>
              <S.Photo
                src={pokemon.sprites.other['official-artwork'].front_default || pokeball}
                alt={pokemon.name}
              />
              <S.BlurEffect color={typeColors[pokemon.types[0].type.name]} />
              <S.Catch src={pokeball} alt="pokeball" title="Catch it" />
            </S.PhotoContent>

            <S.Content>
              <S.DetailGroup>
                <S.ItemDetail>
                  <S.TitleDetail>Altura</S.TitleDetail>
                  <S.TextDetail>{(pokemon.height / 10).toFixed(1)}m</S.TextDetail>
                </S.ItemDetail>

                <S.ItemDetail>
                  <S.TitleDetail>Peso</S.TitleDetail>
                  <S.TextDetail>{(pokemon.weight / 10).toFixed(1)}kg</S.TextDetail>
                </S.ItemDetail>
              </S.DetailGroup>

              <S.DetailGroup>
                <S.ItemDetail>
                  <S.TitleDetail>Habilidades</S.TitleDetail>
                  {pokemon.abilities.map((ability, index) => {
                    if (!ability.is_hidden) {
                      return (
                        <S.TextDetail key={index} link onClick={() => {}}>
                          {ability.ability.name}
                        </S.TextDetail>
                      )
                    }
                  })}
                </S.ItemDetail>
              </S.DetailGroup>

              <S.DetailGroup>
                <S.ItemDetail>
                  <S.TitleDetail>Tipos</S.TitleDetail>
                  {pokemon.types.map((type) => (
                    <S.TextDetail
                      key={type.slot}
                      type="true"
                      color={typeColors[type.type.name]}
                      onClick={() => {}}>
                      {type.type.name}
                    </S.TextDetail>
                  ))}
                </S.ItemDetail>
              </S.DetailGroup>

              <S.DetailGroup>
                <S.ItemDetail>
                  <S.TitleDetail>HP</S.TitleDetail>
                  <S.TextDetail>{pokemon.stats[0].base_stat}</S.TextDetail>
                </S.ItemDetail>

                <S.ItemDetail>
                  <S.TitleDetail>Ataque</S.TitleDetail>
                  <S.TextDetail>{pokemon.stats[1].base_stat}</S.TextDetail>
                </S.ItemDetail>

                <S.ItemDetail>
                  <S.TitleDetail>Defesa</S.TitleDetail>
                  <S.TextDetail>{pokemon.stats[2].base_stat}</S.TextDetail>
                </S.ItemDetail>

                <S.ItemDetail>
                  <S.TitleDetail>Velocidade</S.TitleDetail>
                  <S.TextDetail>{pokemon.stats[5].base_stat}</S.TextDetail>
                </S.ItemDetail>
              </S.DetailGroup>
            </S.Content>
          </S.FlexContent>

          <S.TitleSection>
            Evoluções
            {evolutions.length <= 1 && <small>Este Pokémon não evolui.</small>}
          </S.TitleSection>

          <S.FlexContent>
            {evolutions?.map((item) => (
              <S.CardPokemon key={item.id} data={item} arrow={arrow} />
            ))}
          </S.FlexContent>
        </>
      )}
    </>
  )
}

export default PokemonScreen

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import S from './styles'
import * as api from '../../api/api'
import { toast } from 'react-toastify'
import CardPokemon from '../../components/CardPokemon'
import { setLoading } from '../../store/loadingSlice'
import Loading from '../../components/Loading'
import SearchForm from '../../components/SearchForm'

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([])
  const pokedex = useSelector((state) => state.pokedex.pokemons)
  const loading = useSelector((state) => state.loading.value)
  const dispatch = useDispatch()
  const count = pokedex?.length || 0

  const fetchPokemons = async () => {
    try {
      dispatch(setLoading(true))
      const results = await api.getPokemonsFromPokedex(pokedex)
      setPokemons(results)
    } catch (error) {
      console.error(error)
      toast.error('Ops! Algo deu errado.')
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    if (count > 0 && pokemons.length < 1) fetchPokemons()
  }, [count])

  const filteredPokemons = pokemons.filter((item) => pokedex.includes(item.id))

  return (
    <>
      <S.TitleSection>
        Minha pokedex
        {count === 0 && <small>Você não tem nenhum Pokémon!</small>}
        {count > 0 && (
          <small>
            Você tem {count} pokémon{count > 1 ? 's' : ''}
          </small>
        )}
      </S.TitleSection>

      {count === 0 && <SearchForm />}

      {loading && <Loading />}

      {filteredPokemons.length > 0 && !loading && (
        <S.WrapCards>
          {filteredPokemons.map((item) => (
            <CardPokemon key={item.id} data={item} />
          ))}
        </S.WrapCards>
      )}
    </>
  )
}

export default PokedexScreen

import { useState, useEffect } from 'react'
import CardPokemon from '../../components/CardPokemon'
import S from './styles'
import * as api from '../../api/api'
import Loading from '../../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../store/loadingSlice'
import SearchForm from '../../components/SearchForm'

const SearchScreen = () => {
  const [, setNextPage] = useState('')
  const [pokemons, setPokemons] = useState([])
  const loading = useSelector((state) => state.loading.value)
  const dispatch = useDispatch()

  const fetchPokemons = async () => {
    try {
      dispatch(setLoading(true))
      const { next, results } = await api.getPokemons()
      setNextPage(next)
      setPokemons(results)
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <>
      <SearchForm />
      {!loading && (
        <S.WrapCards>
          {pokemons?.map((item) => (
            <CardPokemon key={item.id} data={item} />
          ))}
        </S.WrapCards>
      )}
      {loading && <Loading data-testid="loading" />}
    </>
  )
}

export default SearchScreen

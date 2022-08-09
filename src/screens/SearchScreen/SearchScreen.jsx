import { useState, useEffect } from 'react'
import CardPokemon from '../../components/CardPokemon'
import S from './styles'
import * as api from '../../api/api'
import { Button, Loading, SearchForm } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../store/loadingSlice'

const SearchScreen = () => {
  const [nextPage, setNextPage] = useState('')
  const [pokemons, setPokemons] = useState([])
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading.value)

  const fetchPokemons = async (url = null) => {
    try {
      dispatch(setLoading(true))
      const { next, results } = await api.getPokemons(url)
      setNextPage(next)
      if (pokemons.length > 0) {
        setPokemons([...pokemons, ...results])
      } else {
        setPokemons(results)
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  const handleLoadMore = () => {
    fetchPokemons(nextPage)
  }

  return (
    <>
      <SearchForm />

      {!loading && (
        <S.FlexContainer>
          {pokemons?.map((item) => (
            <CardPokemon key={item.id} data={item} />
          ))}
        </S.FlexContainer>
      )}

      {!loading && pokemons.length > 0 && nextPage && (
        <S.FlexContainer>
          <Button onClick={handleLoadMore}>Carregar mais</Button>
        </S.FlexContainer>
      )}

      {loading && <Loading data-testid="loading" />}
    </>
  )
}

export default SearchScreen

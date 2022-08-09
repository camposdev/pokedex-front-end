import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as api from '../../api/api'
import CardPokemon from '../../components/CardPokemon'
import Loading from '../../components/Loading'
import S from './style'

const TypePokemonsScreen = () => {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const { name } = useParams()

  const fetchPokemons = async () => {
    try {
      const data = await api.getPokemonsByType(name)
      setPokemons(data)
    } catch (error) {
      toast.error('Ops! Algo deu errado.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [name])

  return (
    <>
      <S.Title>{name} Pokémons</S.Title>

      {loading && <Loading />}

      {pokemons.length > 0 && !loading && (
        <S.WrapCards>
          {pokemons.map((item) => (
            <CardPokemon key={item.id} data={item} />
          ))}
        </S.WrapCards>
      )}
    </>
  )
}

export default TypePokemonsScreen

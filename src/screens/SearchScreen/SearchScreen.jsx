import { useRef, useState } from 'react'
import CardPokemon from '../../components/CardPokemon/CardPokemon'
import S from './styles'

const SearchScreen = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (search.length < 3) return

    setSearch('')
    inputRef.current.blur()
  }

  return (
    <>
      <S.Form focused={isFocused} onSubmit={handleSubmit}>
        <S.Input
          ref={inputRef}
          placeholder="Buscar Pokémon"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </S.Form>

      <CardPokemon />
    </>
  )
}

export default SearchScreen

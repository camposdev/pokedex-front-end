import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as api from '../../api/api'
import { setLoading } from '../../store/loadingSlice'
import S from './styles'

const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const resetForm = () => {
    setSearch('')
    inputRef.current.blur()
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      resetForm()
      dispatch(setLoading(true))
      const response = await api.getPokemonByNameOrNumber(search)
      navigate(`../pokemon/${response.data.name}`)
    } catch (error) {
      if (error.response.status === 404) {
        toast.error('Pokémon não encontrado!')
      } else {
        toast.error('Ops! Algo deu errado.')
      }
      resetForm()
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <S.Form focused={isFocused} onSubmit={handleSubmit} data-testid="form">
      <S.Input
        ref={inputRef}
        placeholder="Buscar Pokémon"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        data-testid="input"
      />
    </S.Form>
  )
}

export default SearchForm

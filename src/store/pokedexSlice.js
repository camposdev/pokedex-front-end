import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: {
    pokemons: []
  },
  reducers: {
    catchPokemon: (state, action) => {
      const id = action.payload
      if (state.pokemons?.includes(id)) return
      state.pokemons = state.pokemons ? [id, ...state.pokemons] : [id]
      localStorage.setItem('@pokedex', JSON.stringify(state.pokemons))
      toast.success('Gotcha!')
    },
    loadPokedex: (state) => {
      const storedPokedex = localStorage.getItem('@pokedex')
      state.pokemons = JSON.parse(storedPokedex)
    },
    removePokemon: (state, action) => {
      state.pokemons = state.pokemons.filter((item) => item !== action.payload)
      localStorage.setItem('@pokedex', JSON.stringify(state.pokemons))
      toast.success('Pokémon removido!')
    }
  }
})

export const { catchPokemon, removePokemon, loadPokedex } = pokedexSlice.actions

export default pokedexSlice.reducer

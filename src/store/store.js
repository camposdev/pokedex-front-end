import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loadingSlice'
import pokedexReducer from './pokedexSlice'

export default configureStore({
  reducer: {
    loading: loadingReducer,
    pokedex: pokedexReducer
  }
})

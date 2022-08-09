import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import PokedexScreen from './screens/PokedexScreen'
import PokemonScreen from './screens/PokemonScreen'
import SearchScreen from './screens/SearchScreen'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SearchScreen />} />
          <Route path="pokemon/:name" element={<PokemonScreen />} />
          <Route path="pokedex" element={<PokedexScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

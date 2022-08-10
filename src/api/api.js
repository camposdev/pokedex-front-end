import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2'

const getPokemons = async (url = null) => {
  const { data } = await axios.get(url || `${baseURL}/pokemon`)
  const promisses = await data.results.map(async (pokemon) => {
    return await getPokemonByUrl(pokemon.url)
  })

  const results = await Promise.all(promisses)
  return { next: data.next, results }
}

const getPokemonsFromPokedex = async (pokemons) => {
  const promisses = await pokemons.map(async (id) => {
    const { data } = await getPokemonByNameOrNumber(id)
    return data
  })

  const results = await Promise.all(promisses)
  return results
}

const getPokemonByUrl = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const getPokemonByNameOrNumber = async (value) => {
  const pokemonNameId = String(value).toLowerCase()
  return await axios.get(`${baseURL}/pokemon/${pokemonNameId}`)
}

const recursiveGetPokemons = async (chain, callback) => {
  try {
    const data = await getPokemonByNameOrNumber(chain.species.name)
    if (chain.evolves_to.length > 0) {
      await recursiveGetPokemons(chain.evolves_to[0], callback)
    }
    return callback(data.data)
  } catch (error) {
    console.error(error)
  }
}

const getEvolutionChainBySpecies = async (url) => {
  const { data } = await axios.get(url)
  if (!data?.evolution_chain?.url) return []

  const { data: evolutionChain } = await axios.get(data.evolution_chain.url)
  const items = []
  await recursiveGetPokemons(evolutionChain.chain, (pokemon) => items.push(pokemon))
  return items.filter((item) => item.is_default).reverse()
}

const getPokemonsByType = async (type) => {
  const { data } = await axios.get(`${baseURL}/type/${type}`)
  const promises = await data.pokemon.map(async (item) => {
    return await getPokemonByUrl(item.pokemon.url)
  })

  const results = await Promise.all(promises)
  return results.filter((item) => item.is_default && item.order >= 0)
}

const getAbilityInfo = async (url) => {
  const { data } = await axios.get(url)
  const result = data.effect_entries.filter((item) => item.language.name === 'en')
  return result[0].short_effect
}

export {
  getPokemonByUrl,
  getPokemons,
  getPokemonByNameOrNumber,
  getEvolutionChainBySpecies,
  getPokemonsFromPokedex,
  getPokemonsByType,
  getAbilityInfo
}

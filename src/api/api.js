import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2'

const getPokemons = async () => {
  const { data } = await axios.get(`${baseURL}/pokemon`)
  const promisses = await data.results.map(async (pokemon) => {
    return await getPokemonByUrl(pokemon.url)
  })

  const results = await Promise.all(promisses)
  return { next: data.next, count: data.count, results }
}

const getPokemonByUrl = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const getPokemonByNameOrNumber = async (value) => {
  return await axios.get(`${baseURL}/pokemon/${value}`)
}

const recursiveGetPokemons = async (chain, callback) => {
  const data = await getPokemonByNameOrNumber(chain.species.name)
  if (chain.evolves_to.length > 0) {
    await recursiveGetPokemons(chain.evolves_to[0], callback)
  }
  return callback(data.data)
}

const getEvolutionChainBySpecies = async (url) => {
  const { data } = await axios.get(url)
  const { data: evolutionChain } = await axios.get(data.evolution_chain.url)
  const items = []
  await recursiveGetPokemons(evolutionChain.chain, (pokemon) => items.push(pokemon))
  return items.reverse()
}

export { getPokemons, getPokemonByNameOrNumber, getEvolutionChainBySpecies }

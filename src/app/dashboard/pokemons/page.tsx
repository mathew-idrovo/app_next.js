import { PokemonsReponse } from '@/app/pokemons'

const getPokemons = async (limit = 20, offset = 0): Promise<any> => {
  const data: PokemonsReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json())

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))
  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)
  return (
    <div className="grid grid-cols-3 gap-4">
      {pokemons.map((pokemon: any) => (
        <div key={pokemon.id} className="p-4 border rounded-lg">
          {pokemon.name}
        </div>
      ))}
    </div>
  )
}

import { useEffect, useRef, useState } from "react"
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPagResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

export const usePokemonPagina = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([])

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=40'

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

   

    const loadPokemons = async () => {

        setIsLoading(true)

        const resp = await pokemonApi.get<PokemonPagResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results)
    }

    const mapPokemonList = (pokemonList: Result[]) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {

            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2]
            // console.log(id)
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return {
                id,
                picture,
                name
            }

        } )

        setSimplePokemon([...simplePokemon, ...newPokemonList])
        setIsLoading(false)

    }


    useEffect(() => {
        loadPokemons();
    }, [])


    return {
        isLoading,
        simplePokemon

    }
}

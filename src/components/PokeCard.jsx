import { useEffect } from "react";
import { UseEffect } from "react";

export function PokeCard(props) {
    const { selelectedPokemon } = props;
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading || !localStorage) { return; } 
        let cache = {};
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'));
        }

        if(selectedPokemon in cache) {
            setData(cache[selectedPokemon]);
            return;
        }

        async function fetchPokemonData() {
            setLoading(true);
            try {
                const baseUrl = 'https://pokeapi.co/api/v2/';
                const suffix = 'pokemon/' + selectedPokemon;
                const final = baseUrl + suffix;
                const res = await fetch(finalUrl);
                const pokemonData = await res.json();
                setData(pokemonData)

                cache[selectedPokemon] = pokemonData;
                localStorage.setItem('pokedex', JSON.stringify(cache));

            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemonData();

    }, [selelectedPokemon])

    return (
        <div>

        </div>
    )
}
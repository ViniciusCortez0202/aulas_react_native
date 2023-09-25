import { getPokemon } from "../repositories/pokemon_repository";

export async function pokemonName(name){
    const pokemon = await getPokemon(name);
    
    const id = pokemon['id'];
    const pokemonName = pokemon['name'].toUpperCase();
    const abilities = pokemon['abilities'].map((element) => {
        return element.ability.name;
    });
    const types = pokemon['types'].map((element) => {
        return element.type.name;
    });
    const moves = pokemon['moves'].map((element) => {
        return element.move.name;
    });
    const height = pokemon['height'];
    const weight = pokemon['weight'];

    const images = Object.values(pokemon['sprites'])
    .slice(0, 8)
    .filter((element) => element != null)
    .map((element, index) => {
        return {id: index, image: element}
    }).reverse();

    return {
        id,
        pokemonName,
        height,
        weight,
        abilities,
        types,
        moves,
        images
    }

}
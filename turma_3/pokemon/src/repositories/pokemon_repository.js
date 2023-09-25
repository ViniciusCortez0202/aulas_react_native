import { BASE_URL } from "../utils/config";

export async function getPokemon(name){
    const result = await fetch(`${BASE_URL}/${name}`);

    return result.json();
}
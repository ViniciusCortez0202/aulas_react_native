import { buscarFilmes } from "../datasource/filmesDatasource"

export async function pegarFilmesPorPagina(pagina){
    const filmes = await buscarFilmes(pagina)

    const filmesFormatados = filmes.results.map((elemento) => {
        return {
            id: elemento.id,
            titulo: elemento.title,
            post: elemento.poster_path,
            descricao: elemento.overview
        }
    })

    return filmesFormatados
}
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ0N2I2ZTdjNjE2MTU5YzUxMTVjZGNmMzc2NzNkOSIsInN1YiI6IjYzNjU2NmQxYzRmNTUyMDA4MTc2Mzc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.89twZuXlBYuaiO-MM2HZ3d5Dn4QbBBX6bQSOQ8NO5DA'
    }
  };
  
export async function getMovies(page){
    const result = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${page}`, options);
    return await result.json()
}
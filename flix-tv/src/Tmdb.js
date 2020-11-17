const API_KEY = 'f62f72c4980b9996edf0457deee84d00';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) => {
    const req = await fetch("https://api.themoviedb.org/3/movie/550?api_key=f62f72c4980b9996edf0457deee84d00");
    const json1 = req.json();
    console.log(json1)
    return json1;
}

export default {
    getHomeList: async ()=> {
        return [
            {
                slug: 'originals',
                title: 'Originais do FlixTV',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items:  await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movies?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movies?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movies?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movies?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movies?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    }
}
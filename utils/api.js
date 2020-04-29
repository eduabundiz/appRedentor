const BASE_API = 'https://unshorn-flares.000webhostapp.com/';

class Api{
    async getPetition(){
        const query = await fetch(`${BASE_API}fecthPetitition.php`)
        const {data} = await query.json();        
        return data        
    }
    async getMovies(){
        const query = await fetch(`${BASE_API}list_movies.json`)
        const {data} = await query.json();        
        return data.movies
    }
}

export default new Api();
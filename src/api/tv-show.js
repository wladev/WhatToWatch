import axios from "axios"
import {BASE_URL, API_KEY_PARAM} from "../config.js" 


export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        // console.log(response.data.results);
        return response.data.results
    }
}

export class TVShowListAPI {
    static async fetchRecommandations() {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/27/recommandations`)
        console.log(response.data.results);
    }
}
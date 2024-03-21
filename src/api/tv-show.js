import axios from "axios"
import {BASE_URL, API_KEY_PARAM} from "../config.js" 


export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        // console.log(response.data.results);
        return response.data.results
    }


static async fetchRecommendations(tvShowId) {
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
        // console.log("***Recommendations***", response.data.results);
        return response.data.results
    }
   
}


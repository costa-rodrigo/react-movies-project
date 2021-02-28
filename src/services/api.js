import axios from 'axios'

import { API_KEY, MOVIE_BASE_URL, SEARCH_MOVIE_BASE_URL, TV_BASE_URL } from '../config/apiConfig'

export const getMovies = async (selectedItem) => {
    const url = MOVIE_BASE_URL+selectedItem
    try {
        const response = await axios.get(url, {
            params: {
                api_key: API_KEY
            }
        })

        const movies = response.data.results

        return movies
    } catch(error) {
        throw error
    }
}

export const getSearch = async (searchResult, selectedItem) => {
    const url = SEARCH_MOVIE_BASE_URL+selectedItem
    try {
        const response = await axios.get(url, {
            params: {
                api_key: API_KEY,
                query: searchResult
            }
        })

        const search = response.data.results

        return search
    } catch(error) {
        throw error
    }
}

export const getTvShows = async (selectedItem) => {
    const url = TV_BASE_URL+selectedItem
    try {
        const response = await axios.get(url, {
            params: {
                api_key: API_KEY
            }
        })

        const tvShows = response.data.results

        return tvShows
    } catch(error) {
        throw error
    }
}
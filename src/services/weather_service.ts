import axios from "axios";
import { urlJoinP } from 'url-join-ts';
import { apiUrl, getCitiesUrl, getWeatherUrl } from "../utils/constants";
import { Location } from "../utils/types";

const fetchData = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw new Error('Failed to fetch data');
    }
};

export const getCitiesList = async (keyword: string) => {
    const url = urlJoinP(apiUrl, [getCitiesUrl], { query: keyword });
    const data = await fetchData(url);
    return data.data; // Assuming response has 'data' field
};

export const getWeatherInCity = async (cityName: string) => {
    const url = urlJoinP(apiUrl, [getWeatherUrl], { city: cityName });
    return fetchData(url); // Directly return fetched weather data
};

export const getWeather = async (city: Location) => {
    if (city?.country) {
        const url = urlJoinP(apiUrl, [getWeatherUrl], { lat: city.latitude, lon: city.longitude });
        return fetchData(url); // Directly return fetched weather data
    }
};

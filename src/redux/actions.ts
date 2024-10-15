import { setCities, setWeather } from "./mainSlice";
import { getCitiesList, getWeather } from "../services/weather_service";
import { Location } from "../utils/types";

// TypeScript type for the dispatch function
type DispatchFunction = (action: any) => void;

// Handle search key changes and update the cities list
export const handleChangeSearchKey = async (searchKey: string, dispatch: DispatchFunction): Promise<void> => {
    try {
        const cityList = await getCitiesList(searchKey);
        console.log(cityList);
        dispatch(setCities(cityList));
    } catch (error) {
        console.error("Error fetching cities list:", error);
    }
};

// Handle city selection and update the weather data
export const handleSelectedCity = async (city: Location, dispatch: DispatchFunction): Promise<void> => {
    try {
        const weatherData = await getWeather(city);
        console.log(weatherData?.current);
        dispatch(setWeather(weatherData?.current));
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

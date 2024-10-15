import './App.scss';
import React, { useEffect, useState, useCallback } from 'react';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "./redux/mainSlice";
import { handleChangeSearchKey, handleSelectedCity } from "./redux/actions";
import { RootState } from "./redux/store";
import {useDebounce} from "./utils/func.ts";

function App() {
    const dispatch = useDispatch();

    const city = useSelector((state: RootState) => state.city);
    const weather = useSelector((state: RootState) => state.weather);
    const cities = useSelector((state: RootState) => state.cities);

    const [keyword, setKeyword] = useState<string>("");

    // Debounced search function to limit API calls during typing
    const handleSearchDebounced = useCallback(
        useDebounce((key: string) => {
            if (key) {
                handleChangeSearchKey(key, dispatch);
            }
        }, 300), [dispatch]
    );

    useEffect(() => {
        if (keyword) {
            handleSearchDebounced(keyword);
        }
    }, [keyword, handleSearchDebounced]);

    useEffect(() => {
        if (city) {
            handleSelectedCity(city, dispatch);
        }
    }, [city, dispatch]);

    const onKeyChanged = (value: string) => {
        setKeyword(value);
    };

    return (
        <div className="container mx-auto pb-6">
            <header className="flex h-12 items-center px-8">
                <h1 className="text-2xl">Weather App</h1>
            </header>
            <div className="flex p-8">
                <div className="w-full">
                    <ReactSearchAutocomplete
                        items={cities}
                        onSelect={(value) => dispatch(setCity(value))}
                        onSearch={onKeyChanged}
                    />
                </div>
            </div>
            {city?.country && weather && (
                <div className="flex p-8 border shadow-lg rounded flex-col mx-3">
                    <div className="w-full flex justify-center font-bold">
                        {city.name} - {city.country}
                    </div>
                    <div className="p-4">Weather: {weather.condition?.text}</div>
                    <div className="p-4">Last Updated: {weather.last_updated}</div>
                    <div className="p-4">Temperature: {weather.temp_c} °C</div>
                    <div className="p-4">Feels Like Temperature: {weather.feelslike_c} °C</div>
                    <div className="p-4">Windchill Temperature: {weather.windchill_c} °C</div>
                    <div className="p-4">Heat Index: {weather.heatindex_c} °C</div>
                    <div className="p-4">Dew Point: {weather.dewpoint_c} °C</div>
                    <div className="p-4">Wind Speed: {weather.wind_mph} mph</div>
                    <div className="p-4">Wind Direction (Degrees): {weather.wind_degree}</div>
                    <div className="p-4">Pressure: {weather.pressure_mb} mb</div>
                    <div className="p-4">Precipitation: {weather.precip_mm} mm</div>
                    <div className="p-4">Humidity: {weather.humidity} %</div>
                    <div className="p-4">Cloud Cover: {weather.cloud} %</div>
                    <div className="p-4">Wind Gust: {weather.gust_kph} km/h</div>
                </div>
            )}
        </div>
    );
}

export default App;

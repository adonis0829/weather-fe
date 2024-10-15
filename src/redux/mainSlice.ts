import { createSlice } from '@reduxjs/toolkit'
import { RootStateType } from "../utils/types.ts";

const initialState: RootStateType = {
    weather: {
        last_updated_epoch: 0,
        last_updated: '',
        temp_c: 0,
        temp_f: 0,
        is_day: 0,
        condition: {
            text: '',
            icon: '',
            code: 0
        },
        wind_mph: 0,
        wind_kph: 0,
        wind_degree: 0,
        wind_dir: '',
        pressure_mb: 0,
        pressure_in: 0,
        precip_mm: 0,
        precip_in: 0,
        humidity: 0,
        cloud: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        windchill_c: 0,
        windchill_f: 0,
        heatindex_c: 0,
        heatindex_f: 0,
        dewpoint_c: 0,
        dewpoint_f: 0,
        vis_km: 0,
        vis_miles: 0,
        uv: 0,
        gust_mph: 0,
        gust_kph: 0
    },
    cities: [],
    city: {
        id: 0,
        wikiDataId: '',
        type: '',
        name: '',
        country: '',
        countryCode: '',
        region: '',
        regionCode: '',
        regionWdId: '',
        latitude: 0,
        longitude: 0,
        population: 0
    }
}

export const weatherSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        setCity: (state, v) => {
            state.city = v.payload
        },
        setWeather: (state,v) => {
            state.weather = v.payload
        },
        setCities: (state,v) => {
            state.cities = v.payload
        }
    },
})

export const { setCity, setWeather, setCities } = weatherSlice.actions
export default weatherSlice.reducer;


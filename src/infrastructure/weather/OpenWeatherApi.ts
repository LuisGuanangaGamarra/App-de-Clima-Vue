import axios from 'axios';

import { WeatherRepository } from "@/domain/repositories/WeatherRepository";
import { Weather } from '@/domain/entities/Weather';
import {RawWeatherDto} from "@/infrastructure/weather/dto/RawWeather.dto";
import {mapToWheaterEntity} from "@/infrastructure/weather/mappers/WeatherMapper";

export class OpenWeatherApi implements WeatherRepository {
    async getByCity(city: string): Promise<Weather> {
        const {
            VITE_OPEN_WEATHER_API_KEY: apiKey,
            VITE_DEFAULT_LANG: lang,
            VITE_WEATHER_UNITS: units,
            VITE_OPEN_WEATHER_BASE_URL: baseUrl,
        }: ImportMetaEnv = import.meta.env;
        const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
        const { data } = await axios.get<RawWeatherDto>(url)
        return mapToWheaterEntity(data)
    }
}
import axios from 'axios';

import { WeatherRepository } from "@/domain/repositories/WeatherRepository";
import { Weather } from '@/domain/entities/Weather';
import {RawWeatherDto} from "@/infrastructure/weather/dto/RawWeather.dto";
import {mapToWheaterEntity} from "@/infrastructure/weather/mappers/WeatherMapper";

export class OpenWeatherApi implements WeatherRepository {
    async getByCity(city: string): Promise<Weather> {
        const apiKey = import.meta.env.VITE_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
        const { data } = await axios.get<RawWeatherDto>(url)
        return mapToWheaterEntity(data)
    }
}
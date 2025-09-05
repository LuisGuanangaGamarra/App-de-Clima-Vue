import { ref } from 'vue'

import { Weather } from "@/domain/entities/Weather";
import {OpenWeatherApi} from "@/infrastructure/weather/OpenWeatherApi";
import {GetWeatherByCity} from "@/aplication/usecases/GetWeatherByCity";

const repo = new OpenWeatherApi()
const getWeatherByCity = new GetWeatherByCity(repo)

export const useWeather = () => {
    const weather = ref<Weather | null>(null)
    const error = ref<string | null>(null)

    const fetch = async (city: string) => {
        try {
            weather.value = await getWeatherByCity.execute(city)
        } catch {
            error.value = 'No se pudo obtener el clima'
        }
    }

    return {
        weather,
        error,
        fetch
    }
}
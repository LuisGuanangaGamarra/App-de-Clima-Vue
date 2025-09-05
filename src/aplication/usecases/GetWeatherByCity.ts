import { WeatherRepository } from "../../domain/repositories/WeatherRepository";

export class GetWeatherByCity {
    constructor(private weatherRepository: WeatherRepository) {}

    async execute(city: string) {
        return await this.weatherRepository.getByCity(city)
    }
}
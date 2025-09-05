import { Weather } from "@/domain/entities/Weather";
import { RawWeatherDto } from "@/infrastructure/weather/dto/RawWeather.dto";

export function mapToWheaterEntity(weatherDto: RawWeatherDto): Weather {
    return new Weather(
        weatherDto.name,
        weatherDto.weather[0].description,
        weatherDto.weather[0].icon,
        weatherDto.main.temp,
        weatherDto.main.feels_like,
        weatherDto.main.humidity
    )
}
export type RawWeatherDto = {
    name: string
    weather: { description: string; icon: string }[]
    main: {
        temp: number;
        feels_like: number;
        humidity: number
    }
};
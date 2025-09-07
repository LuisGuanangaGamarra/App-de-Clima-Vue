import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useWeather } from '@/presentation/composables/useWeather'
import axios, { AxiosResponse } from 'axios'
import { RawWeatherDto } from "@/infrastructure/weather/dto/RawWeather.dto";

vi.mock('axios')
const axiosMock = vi.mocked(axios, { deep: true });

const mockAxiosResponse = <T>(
    data: T,
    partial?: Partial<AxiosResponse<T>>
): AxiosResponse<T> => {
    return {
        data,
        status:200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
        ...partial,
    };
}

describe('useWeather composable', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('debe obtener los datos del clima exitosamente', async () => {
        const mockData :RawWeatherDto = {
            name: 'Quito',
            weather: [{ description: 'soleado', icon: '01d' }],
            main: {
                temp: 28,
                feels_like: 27,
                humidity: 50
            }
        };

        axiosMock.get.mockResolvedValueOnce(mockAxiosResponse(mockData));

        const { weather, error, fetch } = useWeather()


        await fetch('Quito')

        expect(weather.value).not.toBeNull()
        expect(weather.value).toMatchObject({
            city: 'Quito',
            description: 'soleado',
            icon: '01d',
            temperature: 28,
            feels_like: 27,
            humidity: 50
        })
    })

    it('debe manejar errores sin crashear', async () => {
        axiosMock.get.mockRejectedValue(new Error('error'))

        const { weather, error, fetch } = useWeather()

        await fetch('Quito')
        expect(weather.value).toBeNull()
        expect(error.value).toEqual('No se pudo obtener el clima')
    })
})

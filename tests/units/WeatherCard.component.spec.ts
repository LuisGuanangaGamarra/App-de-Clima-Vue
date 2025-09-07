import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WeatherCard from '@/presentation/components/WeatherCard.vue'

describe('WeatherCard', () => {
    it('debe renderizar correctamente los datos', () => {
        const wrapper = mount(WeatherCard, {
            props: {
                weather: {
                    city: 'Quito',
                    description: 'nublado',
                    icon: '01d',
                    temperature: 21,
                    feels_like: 20,
                    humidity: 50
                }
            }
        })
        expect(wrapper.text()).toContain('Quito')
        expect(wrapper.text()).toContain('21')
        expect(wrapper.text()).toContain('nublado')
    })
})

import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import WeatherView from '@/presentation/views/WeatherView.vue'
import axios from 'axios'

vi.mock('axios')

describe('WeatherView.vue - integración', () => {
    it('debe buscar clima y mostrar la tarjeta', async () => {
        (axios.get as any).mockResolvedValue({
            data: {
                name: 'Quito',
                weather: [{ description: 'soleado', icon: '01d' }],
                main: {
                    temp: 28,
                    feels_like: 27,
                    humidity: 50
                }
            }
        })

        const wrapper = mount(WeatherView)
        const input = wrapper.get('input')
        const button = wrapper.get('button')

        await input.setValue('Quito')
        await button.trigger('click')

        await flushPromises()

        expect(wrapper.text()).toContain('Quito')
        expect(wrapper.text()).toContain('28')
        expect(wrapper.text()).toContain('soleado')
    })
})

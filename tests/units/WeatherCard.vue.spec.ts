import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WeatherCard from '@/components/WeatherCard.vue'

describe('WeatherCard', () => {
    it('debe renderizar correctamente los datos', () => {
        const wrapper = mount(WeatherCard, {
            props: {
                city: 'Quito',
                temperature: 21,
                description: 'nublado'
            }
        })
        expect(wrapper.text()).toContain('Quito')
        expect(wrapper.text()).toContain('21')
        expect(wrapper.text()).toContain('nublado')
    })
})

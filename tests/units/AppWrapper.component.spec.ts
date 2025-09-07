import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppWrapper from '@/App.vue'

describe('AppWrapper', () => {
    it('renderiza el componente', () => {
        const wrapper = mount(AppWrapper)
        expect(wrapper.html()).toMatchSnapshot()
    })
})

import MenuDemo from './MenuDemo'
import { mount } from '@vue/test-utils'
import { describe, expect, test, toContain } from 'vitest'
import { nextTick, onUnmounted } from 'vue'
import { Menu } from '../..'

describe('Menu test', () => {
    let wrapper;
    afterEach(() => wrapper.unmount())

    test('testing defaultTo', async () => {
        wrapper = mount(MenuDemo, {
            attachTo: 'body'
        })
        expect(wrapper.find('.horizontal-active-item').text()).toBe('HTML')
    })

    test('testing click MenuItem', async () => {
        wrapper = mount(MenuDemo, {
            attachTo: 'body'
        })
        const items = wrapper.findAll('.menu-item.horizontal-item')
        await items[1].trigger('click')

        expect(items[1].classes()).toContain('horizontal-active-item')
    })
})
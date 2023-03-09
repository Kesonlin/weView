/// <reference types="vitest"/>
// @vitest-environment happy-dom
import Input from '../src/input.vue'
import { InputDemo } from './InputDemo'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { nextTick, onUnmounted } from 'vue'
import exp from 'constants'

describe('Input test', () => {
    let wrapper
    afterEach(() => wrapper.unmount())

    test('testing v-model', async () => {
        wrapper = mount(InputDemo(`
                <Input v-model="inputText" placeholder="请输入..." />
            `))
        await wrapper.find('input').setValue('test')
        expect(wrapper.vm.inputText).toBe('test')
    })

    test('disabled the Input component', async () => {
        wrapper = mount(InputDemo(`
                <Input v-model="inputText" placeholder="请输入..." disabled/>
            `))
        expect(wrapper.classes().includes('input-disabled')).toBe(true)

        await wrapper.find('input').setValue('test')
        expect(wrapper.vm.inputText).toBe('')

    })

    test('let the Input component clearable', async () => {
        wrapper = mount(InputDemo(`
                <Input v-model="inputText" placeholder="请输入..." clearable/>
            `), {
            attachTo: 'body',
        })
        await wrapper.find('input').setValue('test')
        expect(wrapper.classes().includes('input-clearable')).toBe(true)

        await wrapper.find('.clear-icon').trigger('click')
        expect(wrapper.find('input').element.value).toBe('')
    })

    test('use password', async () => {
        wrapper = mount(InputDemo(`
                <Input v-model="inputText" placeholder="请输入密码" show-password/>
            `), {
            attachTo: 'body'
        })
        const input = wrapper.find('input')
        const icon = wrapper.find('.password-icon')

        expect(wrapper.classes().includes('input-password')).toBe(true)

        await wrapper.find('input').setValue('test')
        expect(input.attributes('type')).toBe('password')
    })

    test('limit 10 word', async () => {
        wrapper = mount(InputDemo(`
                <Input v-model="inputText" placeholder="请输入..." :maxlength="10"/>
            `))
        expect(wrapper.classes().includes('input-limit')).toBe(true)

        await wrapper.find('input').setValue('12345')
        expect(wrapper.find('.limit-tag').text()).toBe('5/10')
    })

    test('test size', async () => {
        wrapper = mount(Input, {
            props: {
                width: '200px',
                fontSize: '16px',
            },
            attachTo: 'body'
        })
    })
})

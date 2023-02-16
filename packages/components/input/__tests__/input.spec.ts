/// <reference types="vitest"/>
// @vitest-environment happy-dom
import Input from '../Input.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('Input test', () => {
    test('disabled the Input component', () => {
        const wrapper = shallowMount(Input, {
            props: {
                disabled: 'true'
            }
        });
        expect(wrapper.classes().map(t => t.replace('\n', '')).includes('input-disabled')).toBe(true)
    })
    test('let the Input component clearable', () => {
        const wrapper = shallowMount(Input, {
            props: {
                clearable: 'true'
            }
        });
        expect(wrapper.classes().map(t => t.replace('\n', '')).includes('input-clearable')).toBe(true)
    })
    test('use password', () => {
        const wrapper = shallowMount(Input, {
            props: {
                showPassword: 'true'
            }
        });
        expect(wrapper.classes().map(t => t.replace('\n', '')).includes('input-showPassword')).toBe(true)
    })


})


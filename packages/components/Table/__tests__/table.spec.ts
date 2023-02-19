/// <reference types="vitest"/>
// @vitest-environment happy-dom
import Table from '../index'
import { describe, expect, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

const assertElementsExistence = (
  wrapper: VueWrapper<any>,
  selectors: string[],
  existence: boolean
) => {
  selectors.forEach((selector) => {
    expect(wrapper.find(selector).exists()).toBe(existence)
  })
}
const columns = [
  {
    title: '账户',
    width: '200px',
    key: 'username',
  },
  {
    title: '密码',
    width: '180px',
    key: 'password',
  },
  {
    title: '年龄',
    width: '180px',
    key: 'age',
  },
]

const dataSource = [
  { username: 'root', password: 'root', age: '18' },
  { username: 'woow', password: 'woow', age: '20' },
]

describe('Table test', () => {
  test('test elements', () => {
    const wrapper = shallowMount(Table, {
      props: {
        columns,
        dataSource,
      },
    })
    assertElementsExistence(wrapper, ['.wv-table', '.wv-table-cell'], true)
  })

  test('test size', () => {
    const wrapper = shallowMount(Table, {
      props: {
        columns,
        dataSource,
        size: 'lg',
      },
    })
    expect(wrapper.find('.wv-table[wv-size=lg]').exists()).toBe(true)
  })

  test('test empty', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
      },
    })
    expect(wrapper.find('.wv-empty').exists()).toBe(true)
  })
})

/// <reference types="vitest"/>
// @vitest-environment happy-dom
import { ref } from 'vue'
import Pagination from '../index'
import { describe, expect, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

const assertCurrent = (wrapper: VueWrapper<any>, page: number) => {
  expect(wrapper.find('.pager-curr').text()).toBe(String(page))
}

const assertElementsExistence = (
  wrapper: VueWrapper<any>,
  selectors: string[],
  existence: boolean
) => {
  selectors.forEach((selector) => {
    expect(wrapper.find(selector).exists()).toBe(existence)
  })
}

describe('Pagination test', () => {
  test('test classes', () => {
    const wrapper = shallowMount(Pagination, {
      props: {
        total: 10,
        limit: 10,
      },
    })
    assertElementsExistence(wrapper, ['.pager-limits'], true)
  })

  test('test classes', () => {
    const wrapper = shallowMount(Pagination, {
      props: {
        total: 10,
        limit: 10,
      },
    })
    expect(
      wrapper
        .classes()
        .map((t) => t.replace('\n', ''))
        .includes('pager-default')
    ).toBe(true)
  })

  test('test current page', () => {
    const wrapper = shallowMount(Pagination, {
      props: {
        total: 10,
        limit: 10,
        showPage: true,
      },
    })
    // console.log(wrapper.html())
    assertCurrent(wrapper, 1)
  })

  test('test total', async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 125,
        limit: 10,
        showPage: true,
        showCount: true,
      },
    })
    expect(wrapper.find('.pager-count').text()).toBe('共 125 条 13 页')
  })

  test('test with theme', async () => {
    const withBackground = ref('cyan')
    const wrapper = mount(Pagination, {
      props: {
        total: 10,
        limit: 10,
        showPage: true,
        theme: withBackground.value,
      },
    })
    expect(wrapper.find('.bg-cyan').exists()).toBe(true)
  })
})

/// <reference types="vitest"/>
// @vitest-environment happy-dom
import { nextTick } from 'vue'
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
  test('test elements', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 10,
        limit: 10,
        showPage: true,
        showSkip: true,
        showRefresh: true,
      },
    })
    assertElementsExistence(
      wrapper,
      [
        '.pager-prev',
        '.pager-limits',
        '.pager-refresh',
        '.pager-skip',
        '.pager-btn',
        '.pager-next',
      ],
      true
    )
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

  test('test current page', async () => {
    const wrapper = shallowMount(Pagination, {
      props: {
        total: 100,
        limit: 10,
        showPage: true,
      },
    })
    const c = wrapper.getCurrentComponent()
    assertCurrent(wrapper, 1)
    // console.log(c.emit('change', { current: 2, limit: 10 }))
    // console.log(wrapper.emitted('change'))
    // console.log(wrapper.html())
    c.props.modelValue = 2
    await nextTick()
    assertCurrent(wrapper, 2)
  })

  test('test total', async () => {
    const wrapper = shallowMount(Pagination, {
      props: {
        total: 125,
        limit: 10,
        showPage: true,
        showCount: true,
      },
    })
    expect(wrapper.find('.pager-count').text()).toBe('共 125 条 13 页')
  })

  test('test theme', async () => {
    const wrapper = shallowMount(Pagination, {
      props: {
        total: 10,
        limit: 10,
        showPage: true,
        theme: 'cyan',
      },
    })
    expect(wrapper.find('.bg-cyan').exists()).toBe(true)
  })
})

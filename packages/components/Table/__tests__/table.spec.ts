/// <reference types="vitest"/>
// @vitest-environment happy-dom
import Table from '../index'
import { nextTick } from 'vue'
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

const assertCurrent = (wrapper: VueWrapper<any>, page: number) => {
  expect(wrapper.find('.pager-curr').text()).toBe(String(page))
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
  { id: 1, username: 'root', password: 'root', age: '18' },
  { id: 2, username: 'woow', password: 'woow', age: '20' },
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
        dataSource: [],
      },
    })
    expect(wrapper.find('.wv-empty').exists()).toBe(true)
  })

  test('test 斑马纹', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        even: true,
      },
    })
    // console.log(wrapper.find('.wv-table.wv-table-even tr:nth-child(even) td').html())

    expect(
      wrapper.find('.wv-table.wv-table-even tr:nth-child(even) td').exists()
    ).toBe(true)
  })

  test('test 列序号', () => {
    const wrapper = mount(Table, {
      props: {
        columns: [{ type: 'number' }, ...columns],
        dataSource,
      },
    })
    expect(wrapper.find('.wv-table-cell.wv-table-cell-number').exists()).toBe(
      true
    )
  })

  test('test 列多选', () => {
    const wrapper = mount(Table, {
      props: {
        columns: [{ type: 'checkbox' }, ...columns],
        dataSource,
      },
    })
    expect(wrapper.find('.wv-table-cell.wv-table-cell-checkbox').exists()).toBe(
      true
    )
  })

  test('test 工具条', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        defaultToolbar: ['export', 'print', 'filter'],
      },
    })
    // console.log(wrapper.html())

    expect(
      wrapper
        .find('.wv-table-tool .wv-table-tool-self .wv-inline[title=筛选]')
        .exists()
    ).toBe(true)
  })

  test('test loading', async () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        loading: true,
      },
    })
    expect(wrapper.find('.wv-table-loading').exists()).toBe(true)
    const c = wrapper.getCurrentComponent()
    c.props.loading = false
    await nextTick()
    expect(wrapper.find('.wv-table-loading').exists()).toBe(false)
  })

  test('test pagination', async () => {
    const page = {
      total: 100,
      limit: 10,
      current: 2,
      showCount: true,
      showRefresh: true,
    }
    const wrapper = mount(Table, {
      props: {
        columns,
        dataSource,
        page,
      },
    })
    assertElementsExistence(
      wrapper,
      ['.pager-default', '.pager-count', '.pager-refresh'],
      true
    )
    assertCurrent(wrapper, 2)
    const c = wrapper.getCurrentComponent()
    c.props.page.current = 1
    await nextTick()
    assertCurrent(wrapper, 1)
  })
})

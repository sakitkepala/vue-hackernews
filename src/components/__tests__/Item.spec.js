import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('merender link ke item.url dengan item.title sebagai judulnya', () => {
    const item = {
      url: 'http://github.com',
      title: 'Hai, ini judul'
    }

    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    const a = wrapper.find('a')

    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
  })

  test('merender "item.score" & "item.author"', () => {
    const item = {
      score: 53,
      author: 'Mas Hafidz'
    }

    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    expect(wrapper.text()).toContain(item.score)
    expect(wrapper.text()).toContain(item.author)
  })
})

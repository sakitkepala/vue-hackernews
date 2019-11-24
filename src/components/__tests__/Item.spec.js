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
    expect(a.attributes().href === item.url).toBe(true)
  })
})

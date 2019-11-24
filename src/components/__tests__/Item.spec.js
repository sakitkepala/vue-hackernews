import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('merender item.url oleh komponen', () => {
    const item = {
      url: 10
    }

    // ini menyuplai input pada komponen dengan props pada saat mounting
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    expect(wrapper.text()).toContain(item.url)
  })

  test('merender link ke item.url dengan item.title sebagai judulnya', () => {
    const item = {
      title: 'Hai'
    }

    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    expect(wrapper.find('a').text()).toBe(item.title)
  })
})

import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      url: 10
    }

    // ini menyuplai input pada komponen dengan props pada saat mounting
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })

    expect(wrapper.text()).toContain(item.url)
  })
})

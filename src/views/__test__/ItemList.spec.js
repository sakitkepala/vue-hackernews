import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'
import Item from '../../components/Item.vue'

describe('ItemList.vue', () => {
  test('render satu komponen Item untuk setiap item di window.items', () => {
    window.items = [{}, {}, {}]

    const wrapper = shallowMount(ItemList)

    expect(wrapper.findAll(Item))
      .toHaveLength(window.items.length)
  })
})

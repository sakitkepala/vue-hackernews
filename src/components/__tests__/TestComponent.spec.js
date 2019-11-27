import { shallowMount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'

describe('TestComponent.vue', () => {
  test('render komponen Child.vue', () => {
    const linknya = 'https://google.com'
    const wrapper = shallowMount(TestComponent)

    expect(wrapper.find('a').attributes().href).toBe(linknya)
  })
})

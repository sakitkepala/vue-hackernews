import { shallowMount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'

describe('TestComponent.vue', () => {
  test('render komponen Child.vue', () => {
    const wrapper = shallowMount(TestComponent)

    expect(wrapper.find('p').style).toBe('color: red')
  })
})

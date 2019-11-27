import { shallowMount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'
import Child from '../Child.vue'

describe('TestComponent.vue', () => {
  test('render komponen Child.vue', () => {
    const wrapper = shallowMount(TestComponent)

    expect(wrapper.findAll(Child)).toHaveLength(1)
    expect(wrapper.find(Child).props().testProp).toBe('some-value')
  })
})

import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {
  test('disembunyikan pada awal dirender', () => {
    const wrapper = shallowMount(ProgressBar)

    expect(wrapper.classes()).toContain('hidden')
  })
})

import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  const wrapper = mount(Index)
  const vue = wrapper.vm

  test('is a Vue instance', () => {
    expect(vue).toBeTruthy()
  })
})

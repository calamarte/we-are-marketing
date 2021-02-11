import { mount } from '@vue/test-utils'
import LangSelector from '@/components/LangSelector.vue'

describe('LangSelector', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LangSelector)

    expect(wrapper.vm).toBeTruthy()
  })
})

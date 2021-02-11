import { mount } from '@vue/test-utils'
import InputText from '@/components/InputText.vue'

describe('InputText', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InputText, {
      propsData: {
        id: 'id'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })
})

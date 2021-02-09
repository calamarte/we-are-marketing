import { mount } from '@vue/test-utils'
import IcoButton from '@/components/IcoButton.vue'

describe('IcoButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IcoButton, {
      propsData: {
        icon: 'fas fa-vial'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })
})

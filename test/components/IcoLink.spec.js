import { mount } from '@vue/test-utils'
import IcoLink from '@/components/IcoLink.vue'

describe('IcoLink', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IcoLink, {
      propsData: {
        icon: 'fas fa-vial',
        href: '#',
        text: 'test'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })
})

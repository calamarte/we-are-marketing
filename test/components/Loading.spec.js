import { mount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Loading, {
      propsData: {
        id: 'id'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })
})

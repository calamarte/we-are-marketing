import { mount } from '@vue/test-utils'
import Stepper from '@/components/Stepper.vue'

// Auxiliar vars
const words = ['Rock', 'Paper', 'Scissor', 'Entelgy', 'Stepper', 'Pepino', 'Valencia', 'COVID']

// Auxiliar functions
function randomWord () {
  return words[Math.floor(Math.random() * words.length)]
}

function fill (array, length) {
  for (let i = 0; i < length; i++) {
    array.push(randomWord())
  }
}

// Test
describe('Stepper', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Stepper, {
      propsData: {
        steps: ['Test']
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  const steps = []
  const stepsLength = words.length
  fill(steps, stepsLength)

  const wrapper = mount(Stepper, {
    propsData: {
      steps
    }
  })
  const vue = wrapper.vm

  test('Props validation', () => {
    const negate = [
      [], [1], [{}], [[]] // Try more
    ]

    const validator = vue.$options.props.steps.validator
    const resum = negate.map(n => !validator(n))

    expect(resum.every(t => t)).toBe(true)
  })

  test('Index switching', () => {
    // Test Next
    steps.forEach((s, i) => {
      expect(JSON.stringify(vue.current)).toBe(JSON.stringify({ index: i, value: s }))
      vue.next()
    })

    // No more next
    for (let i = 0; i < 5; i++) {
      vue.next()
    }

    expect(JSON.stringify(vue.current))
      .toBe(JSON.stringify({ index: stepsLength - 1, value: steps[stepsLength - 1] }))

    // Test Previous
    const reversedSteps = [...steps].reverse()
    reversedSteps.forEach((s, i) => {
      i = stepsLength - i - 1
      expect(JSON.stringify(vue.current)).toBe(JSON.stringify({ index: i, value: s }))
      vue.previous()
    })

    // No more previous
    for (let i = 0; i < 5; i++) {
      vue.previous()
    }

    expect(JSON.stringify(vue.current))
      .toBe(JSON.stringify({ index: 0, value: steps[0] }))
  })
})

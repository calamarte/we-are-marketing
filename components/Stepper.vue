<template>
  <div class="stepper full-size">
    <!-- Header -->
    <div class="stepper--header center">
      <div class="center">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
          :class="{
            previous: end || position(index) === 'previous',
            next: !end && position(index) === 'next',
          }"
        >
          <!-- Rest Index -->
          <div v-if="end || position(index) !== 'current'" class="step--index horizontal--center">
            <span v-if="!end && position(index) === 'next'">{{ index + 1 }}</span>
            <i v-else class="fas fa-check" />
            <caption>
              {{ step }}
            </caption>
          </div>

          <!-- Current Index Animated -->
          <transition name="move" enter-active-class="animate__animated animate__bounceIn">
            <div v-if="!end && position(index) === 'current'" class="step--index horizontal--center">
              <span>{{ index + 1 }}</span>
              <caption>
                {{ step }}
              </caption>
            </div>
          </transition>

          <div
            v-if="index < steps.length - 1"
            :style="{ width: splitterWidth }"
            class="step--splitter"
          >
            <div />
          </div>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="stepper--body loading-container" :class="bodyStyle">
      <Loading v-if="loading" />
      <div v-for="(step, index) in steps" :key="index" :class="bodyContentStyle">
        <transition
          name="move"
          enter-active-class="animate__animated animate__fadeIn"
        >
          <!-- Dynamics slots for Stepper content  -->
          <slot
            v-if="step === current.value"
            :name="`step-${index + 1}`"
            :step="step"
            :move="{ next: next, previous: previous }"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.length && value.every(step => typeof step === 'string')
      }
    },
    splitterWidth: {
      type: String,
      default: '30px'
    },
    loading: {
      type: Boolean,
      default: false
    },
    bodyStyle: String,
    bodyContentStyle: String
  },
  data () {
    return {
      current: {
        index: 0,
        value: ''
      },
      end: false
    }
  },
  created () {
    this.current.value = this.steps[0]
  },
  methods: {
    // Devuelve la posición imprecisa relativa a this.current
    // ['previous', 'current', 'next']
    position (index) {
      if (index < this.current.index) {
        return 'previous'
      }

      if (index === this.current.index) {
        return 'current'
      }

      if (index > this.current.index) {
        return 'next'
      }
    },

    next () {
      if (this.current.index < this.steps.length - 1) {
        const index = ++this.current.index
        this.current.value = this.steps[index]
      } else {
        this.end = true
      }
    },

    previous () {
      if (this.current.index > 0) {
        const index = --this.current.index
        this.current.value = this.steps[index]
        this.end = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$indexPadding: 10px;

/**
  @mixins
*/
@mixin previous-index{
  background-color: $positive;
  opacity: .9;
}

@mixin next-index {
  $borderSize: 2px;

  background-color: white;
  border: $borderSize solid $secondary;
  padding: $indexPadding - $borderSize 0;

  > span, > i {
    color: $secondary;
  }

  > caption {
    opacity: 0.5;
  }
}

.stepper {
  min-width: 300px;
  padding: 10px;

  &--header {
    min-height: 100px;
  }

  &--body {
    min-height: 300px;
  }
}

/**
  Styles
*/
.step {
  $indexSize: 40px;
  $indexPadding: 10px;

  display: flex;

  &.previous > .step--index {
    @include previous-index;
  }

  &.next > .step--index {
    @include next-index;
  }

  &--index {
    width: $indexSize;
    height: $indexSize;
    background: $secondary;
    border-radius: 100%;

    font-weight: bold;
    text-align: center;
    white-space: nowrap;

    padding: $indexPadding 0;
    margin-bottom: 50px;

    flex-wrap: wrap;

    > span, > i{
      color: $primary;
    }

    > caption {
      margin-top: 20px;
      text-transform: uppercase;
      opacity: 0.8;
    }
  }

  &--splitter {
    height: $indexSize;
    @extend %center;

    > div{
      width: 100%;
      height: 1px;
      background-color: black;
      border-radius: 10px;
      opacity: 0.2;
    }

    margin: 0 20px;
  }

}
</style>

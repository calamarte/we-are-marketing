<template>
  <div class="stepper">
    <!-- Header -->
    <div class="stepper--header center">
      <div class="center">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
          :class="{
            previous: position(index) === 'previous',
            current: position(index) === 'current',
            next: position(index) === 'next'
          }"
        >
          <div class="step--index horizontal--center">
            <span v-if="position(index) !== 'previous'">{{ index+1 }}</span>
            <span v-else class="material-icons">done</span>
            <caption>{{ step }}</caption>
          </div>
          <div v-if="index < steps.length -1" :style="{width: splitterWidth}" class="step--splitter" />
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="stepper--body" :class="bodyStyle">
      <div v-for="(step, index) in steps" :key="index">
        <slot v-if="step === current.value" :name="`step-${index+1}`" :step="step" :move="{next: next, previous: previous}" />
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
        return value.every(step => typeof step === 'string')
      }
    },
    splitterWidth: {
      type: String,
      default: '30px'
    },
    bodyStyle: String
  },
  data () {
    return {
      current: {
        index: 0,
        value: ''
      }
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
      }
    },

    previous () {
      if (this.current.index > 0) {
        const index = --this.current.index
        this.current.value = this.steps[index]
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.stepper{
  min-width: 300px;
  padding: 10px;

  &--header {
    min-height: 100px;
  }

  &--body{
    min-height: 300px;
  }
}

.step{
  $indexPadding: 10px;

  display: flex;
  align-items: baseline;

  &.previous > .step--index{
    background-color: $positive;

    > span{
      color: white;
    }
  }

  &.current >.step--index > span{
      color: $primary;
  }

  &.next > .step--index{
        $borderSize: 2px;

        background-color: white;
        border: $borderSize solid $secondary;
        padding: $indexPadding - $borderSize 0;

        > span{
          color: $secondary;
        }

        > caption{
          opacity: .5;
      }
  }

  &--index{
        width: 40px;
        height: 40px;
        background: $secondary;
        border-radius: 100%;
        opacity: .8;

        text-align: center;
        white-space: nowrap;

        padding: $indexPadding 0;
        margin-bottom: 60px;

        flex-wrap: wrap;

        > caption{
          margin-top: 20px;
          text-transform: uppercase;
          opacity: .8;
        }
    }

    &--splitter{
      height: 1px;
      background-color: black;
      border-radius: 10px;
      opacity: .2;
      margin: 0 20px;
    }
}
</style>

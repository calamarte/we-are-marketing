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
            previous: index < current.index,
            current: index === current.index,
            next: index > current.index
          }"
        >
          <div class="step--index horizontal--center">
            {{ index+1 }}
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

  &.current{

    .step--index{
      color: $primary;
      > caption{
        color: initial;
      }
    }

  }

  &.next{
      .step--index{
        $borderSize: 2px;

        color: $secondary;
        background-color: transparent;
        border: $borderSize solid $secondary;
        padding: $indexPadding - $borderSize 0;

        > caption{
          color: initial;
          opacity: .5;
      }
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

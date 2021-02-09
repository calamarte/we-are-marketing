<template>
  <div class="button" :class="{reverse: iconLeft, disabled: disabled}" @click="parentClick">
    <button type="button" :disabled="disabled" @click="$emit('click')">
      {{ label }}
    </button>

    <i :class="icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    iconLeft: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    styleClass: String

  },
  methods: {
    parentClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.reverse{
    flex-direction: row-reverse;
}

.button{
    display: flex;
    align-items: center;
    font-weight: bold;

    padding: 5 10px;

    button{
        border: none;
        cursor: inherit;
        color: inherit;
        outline: inherit;
        background-color: inherit;
    }

    > *{
        padding: 0 5px;
    }

}
</style>

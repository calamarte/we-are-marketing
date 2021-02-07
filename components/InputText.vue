<template>
  <div :id="id" class="input full-width">
    <label v-if="label" :for="id">{{ label }}</label>
    <input :id="id + '-input'" :value="value" type="text" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    value: String,
    label: String
  }
}
</script>

<style lang="scss" scoped>

.input{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    label{
        margin-bottom: 5px;
    }
}

</style>

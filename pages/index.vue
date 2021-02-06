<template>
  <div>
    <Stepper :steps="steps" splitter-width="90px" body-style="card" />
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      steps: ['Mis datos', 'Pago']
    }
  }
}
</script>

<style lang="scss" scoped>

.stepper{
  width: 50%;
}

</style>

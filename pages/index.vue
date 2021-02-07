<template>
  <div>
    <Stepper :steps="steps" splitter-width="90px" body-style="card">
      <template #step-1="{move}">
        <p>Esto es una prueba</p>
        <button type="button" @click="move.next">
          Next
        </button>
      </template>

      <template #step-2="{move}">
        <button type="button" @click="move.previous">
          Previous
        </button>
      </template>
    </Stepper>
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

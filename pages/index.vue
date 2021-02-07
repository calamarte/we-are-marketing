<template>
  <div class="main">
    <Stepper :steps="steps" splitter-width="90px" body-style="card" body-content-style="horizontal--center">
      <template #step-1="{move}">
        <div class="user-data center">
          <h2>Mis Datos</h2>
          <p class="text-center">
            Revisa los datos y completa aquellos pendientes antes de continuar el proceso
          </p>

          <form class="center">
            <InputText id="username" v-model="user.name" label="Nombre" />
            <InputText id="user-lastname" v-model="user.lastname" label="Apellidos" />
          </form>

          <button type="button" @click="move.next">
            Continuar
          </button>
        </div>
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
      steps: ['Mis datos', 'Pago'],
      user: {
        name: '',
        lastname: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.main{
  width: 70%;
}

.user-data,form{
  flex-direction: column;
  width: 100%;
}

.user-data{
  width: 50%;
}

</style>

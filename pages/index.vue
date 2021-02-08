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

          <button type="button" :disabled="!dataIsValid" @click="move.next">
            Continuar
          </button>
        </div>
      </template>

      <template #step-2="{move}">
        <!-- Pendiente de Pago -->
        <div v-if="!payData" class="user-data center">
          <h2>Pago del producto</h2>
          <p class="text-center">
            Una vez efectuado el pago del producto, recibirás un email con los detalles de la compro.
          </p>

          <div>
            <h3>Tarjeta de crédito</h3>
            <p>
              Se dirigió a uno plataforma de pago.
              Se trato de un proceso seguro.
              Puede que lo validación del pago torde 24 horas en completarse
            </p>

            <div class="credit-card">
              <img src="~/assets/images/visa.svg" alt="">
              <img src="~/assets/images/master.svg" alt="">
            </div>
          </div>

          <button type="button" @click="move.previous">
            Cancelar
          </button>

          <button type="button" @click="pay">
            Pagar
          </button>
        </div>

        <!-- Pagado -->
        <div v-else>
          {{ payData }}
        </div>
      </template>
    </Stepper>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      loading: false,
      steps: ['Mis datos', 'Pago'],
      user: {
        name: '',
        lastname: ''
      },
      payData: false // Falsi value
    }
  },
  computed: {
    dataIsValid () {
      const { name, lastname } = this.user
      return name && lastname
    }
  },
  methods: {
    pay () {
      this.loading = true
      this.$axios.$get('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09')
        .then((res) => { this.payData = res })
        .catch(err => console.log(err))
        .finally(() => {
          this.loading = false
        })
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

.credit-card{
  img{
    width: 50px;
    height: 60px;
  }

}

</style>

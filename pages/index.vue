<template>
  <div class="main">
    <section>
      <Stepper :steps="steps" splitter-width="90px" body-style="card" body-content-style="horizontal--center">
        <!-- Step 1 Formulario validable -->
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

            <div class="buttons">
              <IcoButton label="Continuar" icon="far fa-arrow-alt-circle-right" :disabled="!dataIsValid" @click="move.next" />
            </div>
          </div>
        </template>

        <!-- Step 2 Proceso de Pago -->
        <template #step-2="{move}">
          <!-- Pendiente de Pago -->
          <div v-if="!payData" class="pay center">
            <h2>Pago del producto</h2>
            <p class="text-center">
              Una vez efectuado el pago del producto,
              recibirás un email con los detalles de la compro.
            </p>

            <section class="tarjeta">
              <div class="card-icon">
                <i class="back fas fa-id-card" />
                <i class="front far fa-credit-card" />
              </div>

              <h3>Tarjeta de crédito</h3>
              <p>
                Se dirigió a uno plataforma de pago.
                Se trato de un proceso seguro.
                Puede que lo validación del pago torde 24 horas en completarse
              </p>

              <div class="credit-card">
                <img src="~/assets/images/visa.png" alt="Imagen de la tarjeta Visa">
                <img src="~/assets/images/master.png" alt="Imagen de la tarjeta Mastercard">
              </div>
            </section>

            <div class="buttons">
              <IcoButton label="Anterior" class="outline" icon-left icon="far fa-arrow-alt-circle-left" @click="move.previous" />
              <IcoButton label="Pagar" icon="far fa-arrow-alt-circle-right" @click="pay(move)" />
            </div>
          </div>

          <!-- Pagado -->
          <div v-else class="paid">
            <i class="diploma fas fa-money-bill-wave" />
            <h3>{{ payData.title }}</h3>
            <p>{{ payData.text }}</p>
          </div>
        </template>
      </Stepper>
    </section>
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
    // Proceso de pago
    pay (move) {
      this.loading = true
      this.$axios.$get('http://www.mocky.io/v2/5e3d41272d00003f7ed95c09')
        .then((res) => { this.payData = res })
        .catch(err => console.warn(err))
        .finally(() => {
          this.loading = false
          move.next()
        })
    }
  }

}
</script>

<style lang="scss" scoped>

$iconColor: #de3931;

.main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 5px;

  > section{
    width: 50vw;
    height: 100%;
    margin-top: 5%;
  }
}

.user-data,form{
  flex-direction: column;
  width: 100%;
}

// Step 1 Formulario
.user-data{
  width: 50%;
  padding: 40px 0;

  > *{
    padding: 10px 0;
  }

  form{
    margin: 10px 0;

    > .input{
      padding: 15px 0;
    }
  }

  .buttons{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}

//Step 2 Pago
.pay{
  @extend .user-data;
  padding-top: 20px;

  > p{
    white-space: nowrap;
  }

  .buttons{
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
}

.tarjeta{
  $borderSize: 2px;

  margin-top: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: $borderSize solid lightgrey;

  padding: #{20px - $borderSize} #{43px - $borderSize};

   > * {
    margin: 10px 0;
  }

  .credit-card{
    img{
      height: 30px;
    }
  }

}

.card-icon{
  width: 75px;
  height: 70px;

  position: relative;

  color: $iconColor;

  i{
    position: absolute;
    font-size: 3em;
  }

  .back{
    z-index: 1;
    top: 0;
    left: 0;
  }

  .front{
    background-color: $primary;
    border-left: 2px solid $primary;
    z-index: 2;
    bottom: 0;
    right: 0;
  }

}

//Step 2.2 Pago Finalizado
.paid{
  @extend .user-data;
  text-align: center;

  i{
    font-size: 3em;
    color: $iconColor;
  }
}

</style>

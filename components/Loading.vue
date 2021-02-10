//*
* Para funcionar correctamente el contenedor del componenete
* debe tener los styles de .loading-conatiner
*//

<template>
  <div>
    <i :class="icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fas fa-spinner'
    }
  }
}
</script>

<style lang="scss" scoped>
div{
    position: absolute;
    background-color: $primary;
    top: 0;
    left:0;
    z-index: 100;
    width: 100%;
    height: 100%;
    opacity: .93;

    @extend %center;

    i{
        animation: spin 1s linear infinite;
        font-size: 4em;
        color: $secondary;
    }
}

@keyframes spin {
  0% {
     transform: rotate(0deg);
     opacity: 0;
   }
  50%{ opacity: 1;}
  100% {
    transform: rotate(360deg);
    opacity: 0;
    }

}
</style>

<template>
  <div class="select">
    <select v-model="selected" class="flat" @click="$emit('click')" @change="changeLang">
      <option v-for="lang in langs" :key="lang" :value="lang">
        {{ lang | uppercase }}
      </option>
    </select>
    <i class="fas fa-caret-down" />
  </div>
</template>

<script>
export default {
  filters: {
    uppercase (val) {
      return val && typeof val === 'string' ? val.toUpperCase() : val
    }
  },
  data () {
    return {
      langs: ['es', 'en'],
      selected: 'es'
    }
  },
  methods: {
    // Cambio de idioma
    changeLang () {
      console.log('Cambiando a ' + this.selected)
    }
  }

}
</script>

<style lang="scss" scoped>
.flat {
  border: none;
  outline: none;
  background-color: $primary;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select{
    display: flex;
    align-items: flex-start;
    position: relative;

  select{
      padding: 0 5px;
      font-size: inherit;
      font-weight: inherit;
  }

   > i{
      position: absolute;
      left: 100%;
      top:-4px;
  }
}
</style>

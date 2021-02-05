<template>
  <div>
    <div class="steps container vertical--center horizontal--center">
      <div class="steps horizontal--center vertical--center">
        <div class="step">
          1
        </div>
        <div style="width: 30px" class="splitter" />
        <div class="step">
          2
        </div>
      </div>
    </div>
    <div class="card" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.steps.container{
    min-height: 100px;

    .step{
        width: 30px;
        height: 30px;
        background: lightblue;
        border-radius: 100%;

        text-align: center;
        padding: 5px 0;
    }
}

.splitter{
    height: 1px;
    background-color: black;
    border-radius: 10px;
    opacity: .2;
    margin: 0 10px;
}
</style>

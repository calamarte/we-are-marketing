<template>
  <div class="container">
    <div class="title">
      <h1>we are marketing</h1>
      <div class="triangle" />
    </div>
    <caption>
      Global Growth Agents
    </caption>
  </div>
</template>

<style lang="scss" scoped>

.container{
  line-height: 1;
}

h1 {
  font-family: "Abril Fatface", cursive;
  font-size: 1.2em;
}

caption {
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
  font-size: 0.7em;
}

.title {
  position: relative;
  .triangle {
    position: absolute;
      width: 0;
      height: 0;
      border-top: 5px solid red;
      border-left: 5px solid transparent;

      top: 2px;
      right: -6px;
  }
}
</style>

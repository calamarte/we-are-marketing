<template>
  <div class="link">
    <i :class="icon" />
    <a :href="href">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
.link{
    display: inline;

    * > {
        padding: 0 5px;
    }

    a{
        color: black;
        text-decoration: none;

        &:link,
        &:visited {
            color: "inherit";
        }
    }
}
</style>

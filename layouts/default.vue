<template>
  <div>
    <header>
      <Logo />

      <div class="vertical--center nav-bar">
        <a href="#"> <i class="material-icons"> description </i> Ayuda </a>
        <a href="#"> <i class="material-icons"> person_outline </i> Sign in </a>

        <!-- Lang Selector -->
        <div class="select">
          <select class="flat">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          <i class="material-icons"> arrow_drop_down </i>
        </div>
      </div>
    </header>
    <main>
      <Nuxt />
    </main>

    <footer class="vertical--center">
      <caption>2020 © We are Marketinga</caption>
      <Logo/>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.flat {
  border: none;
  outline: none;
  background-color: $primary;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select{
  @extend .vertical--center;

  i{
    height: 100%;
  }
}


header {
  width: 100%;
  height: 50px;
  background-color: $primary;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-bar {
    height: 100%;
    text-transform: uppercase;

    > * {
      margin: 0 20px;
    }
  }

  a {
    @extend .vertical--center;
    color: black;
    text-decoration: none;

    &:link,
    &:visited {
      color: "inherit";
    }
  }
}

main {
  background-color: $background-color;
}


footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;

  background-color: $primary;
  display: flex;
  justify-content: space-around;

  caption{
    opacity: .2;
    font-size: .5em;
  }

}
</style>>

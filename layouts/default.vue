<template>
  <div>
    <header>
      <Logo />

      <nav class="vertical--center nav-bar">
        <IcoLink href="#" icon="far fa-file-alt" text="Ayuda" />
        <IcoLink href="#" icon="far fa-user" text="Sign in" />

        <!-- Lang Selector -->
        <LangSelector />
      </nav>
    </header>
    <main>
      <Nuxt />
    </main>

    <footer class="vertical--center">
      <caption>2020 © We are Marketinga</caption>
      <Logo />
    </footer>
  </div>
</template>

<style lang="scss" scoped>

//Responsive
$breakpoint: 565px;

$headerHeight: 50px;
$footerHeight: 100px;

header {
  width: 100%;
  height: $headerHeight;
  background-color: $primary;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-bar {
    height: 100%;
    text-transform: uppercase;
    font-weight: 700;

    > * {
      margin: 0 20px;
    }
  }

}

main {
  background-color: $background-color;
  width: 100%;
  height: calc(100% - #{$headerHeight + $footerHeight});
}

footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $footerHeight;

  background-color: $primary;
  display: flex;
  justify-content: space-around;

  caption{
    opacity: .2;
    font-size: .5em;
  }

}

//Responsive
@media(max-width: $breakpoint){

  $headerHeight: $headerHeight * 2;

  header{
    padding-top: 10px;
    flex-direction: column;
    height: $headerHeight;

    .nav-bar{
      display: flex;
      flex-wrap: wr;
    }
  }

  main{
    height: calc(100% - #{$headerHeight + $footerHeight});
  }

  footer{
    flex-direction: column-reverse;
    align-items: center;
  }

}
</style>>

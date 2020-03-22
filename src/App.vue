<template>
  <div id="app" class="bg-ultralightgray leading-normal">
    <div class="flex flex-row">
      <div class="w-1/2">
        <transition name="fade">
          <router-view />
        </transition>
      </div>
      <div class="w-1/2 py-8 scanner flex flex-col items-center">
        <h3
          class="text-white w-11/12 text-xl font-bold text-center leading-snug"
        >
          Halten Sie ihre Karte an<br />die Markierung
        </h3>
        <div class="self-center">
          <Barcodescanner routerLink="/success" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.scanner {
  height: 100vh;
  background-color: black;
}
</style>

<template>
  <div id="app">
    <div class="row">
      <div class="column scanner">
        <Barcodescanner routerLink="/success" />
      </div>

      <div class="column">
        <div id="nav">
          <router-link to="/">Idle</router-link> |
          <router-link to="/success">Success</router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  display: flex;
}
.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="column scanner">
        <div>
          <v-quagga
            :onDetected="logIt"
            :readerSize="readerSize"
            :readerTypes="['ean_reader']"
          ></v-quagga>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    };
  },

  methods: {
    logIt(data) {
      console.log("detected", data);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
.row {
  display: flex;
}

.column {
  flex: 50%;
}

.scanner {
  width: 33.3%;
}

.error {
  font-weight: bold;
  color: red;
}
</style>

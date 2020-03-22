<template>
  <div class="scanner">
    <v-quagga
      :onProcessed="detectionState"
      :onDetected="logIt"
      :readerSize="readerSize"
      :readerTypes="['ean_reader']"
    ></v-quagga>
  </div>
</template>

<script>
export default {
  props: ["routerLink"],
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: [],
      route: this.routerLink,
      lastRoute: "",
      barcode: "",
      lastBarcode: ""
    };
  },

  methods: {
    detectionState(data) {
      if (typeof data === "undefined") {
        if (this.$route.path !== "/idle" && this.$route.path !== "/") {
          this.$router.push("/idle");
        }
      }
    },
    logIt(data) {
      this.barcode = data.codeResult.code;
      this.route = this.$route.path;
      if (this.barcode !== this.lastBarcode && this.route !== this.lastRoute) {
        if (this.$route !== "/success") {
          this.$router.push("/success");
          this.lastRoute = "/success";
          this.lastBarcode = this.barcode;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.scanner {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
video {
  position: inherit !important;
  width: 100%;
  // transform: scale(0.5);
}
</style>

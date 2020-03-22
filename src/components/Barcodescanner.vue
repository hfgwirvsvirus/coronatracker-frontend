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
  props: ["routerCheckinLink", "routerCheckoutLink"],
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480
      },
      detecteds: [],
      route: null,
      checkinRoute: this.routerCheckinLink,
      checkoutRoute: this.routerCheckoutLink,
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
      //TODO: check whether this is a checkin or checkout with vuex, use proper route
      this.route = this.$route.path;
      if (this.barcode !== this.lastBarcode && this.route !== this.lastRoute) {
        if (!this.$route.path.startsWith("/checkout")) {
          this.$router.push("/checkout/" + this.barcode);
          this.lastRoute = "/checkout/" + this.barcode;
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

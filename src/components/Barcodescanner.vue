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
      if (this.route !== this.lastRoute) {
        if (this.barcode !== this.lastBarcode) {
          // User is added to temporary checked in userlist
          if (this.$store.getters.getUser(this.barcode) === undefined) {
            this.$store.dispatch("addUser", {
              id: this.barcode,
              timestamp: Date.now()
            });
          } else {
            // Checkout procedure
            this.$store.dispatch("removeUser", {
              id: this.barcode,
              timestamp: Date.now()
            });
            console.log(this.$store.getters.getUserlist);
          }
        }

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

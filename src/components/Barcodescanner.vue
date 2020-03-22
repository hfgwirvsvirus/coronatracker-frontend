<template>
  <div>
    <v-quagga
      :onDetected="logIt"
      :readerSize="readerSize"
      :readerTypes="['ean_reader']"
    ></v-quagga>
  </div>
</template>

<script>
let timer;
export default {
  props: ["routerLink"],
  data() {
    return {
      readerSize: {
        width: 320,
        height: 240
      },
      detecteds: [],
      route: this.routerLink,
      lastRoute: "",
      barcode: "",
      lastBarcode: ""
    };
  },

  methods: {
    logIt(data) {
      // console.log("detected", data);
      this.barcode = data.codeResult.code;
      this.route = this.$route.path;
      if (this.barcode !== this.lastBarcode && this.route !== this.lastRoute) {
        if (this.$route !== "/success") {
          this.$router.push("/success");
          this.lastRoute = "/success";
        }
        // else {
        //   this.lastBarcode = this.barcode;
        //   console.log("different barcode!");
        //   console.log(data.codeResult.code);
        //   this.$router.push("/idle");
        //   this.lastRoute = "/idle";
        // }
      } else {
        if (window.timer) {
          clearTimeout(timer);
        }
        console.log("timout");
        // timer = setTimeout(this.$router.push("/idle"), 5000000);
        timer = setTimeout(function() {
          // alert("Hello");
        }, 5000);
      }
    }
  }
};
</script>

<style scoped></style>

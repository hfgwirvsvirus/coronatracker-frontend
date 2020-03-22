<template>
  <div class="main h-full py-5 flex flex-col justify-start items-center">
    <p class="w-11/12 text-4xl leading-snug font-bold text-gray">
      Sie verlassen
    </p>

    <div
      class=" w-11/12 p-5 bg-white rounded overflow-hidden shadow-lg text-left flex flex-col justify-between leading-normal"
    >
      <div class="font-bold text-4xl text-black mb-2 ">REWE</div>
      <div class="text-base text-black mb-2">Ledergasse 4</div>
      <div class="text-base text-black mb-2">
        73525 Schwäbisch Gmünd
      </div>
    </div>
    <p class="w-11/12 text-4xl leading-snug font-bold text-gray">
      um
    </p>

    <div
      class=" w-11/12 p-5 bg-white rounded overflow-hidden shadow-lg text-left flex flex-row justify-between"
    >
      <div class="font-bold text-base text-black mb-2">16:33</div>
      <div class="font-bold text-base text-black mb-2">22.03.2020</div>
    </div>

    <div
      class=" w-11/12 p-5 bg-white rounded overflow-hidden shadow-lg text-left flex flex-row justify-between"
    >
      <div class="font-bold text-2xl text-black mb-2 ">
        Ihr aktueller Status (ID: {{ $route.params.uid }})
      </div>
      <div
        v-if="loading"
        class=" w-11/12 p-5 bg-white rounded overflow-hidden shadow-lg text-left flex flex-row justify-between bg-gray-500"
      >
        wird geladen...
      </div>
      <div
        v-if="res.threatLevel < 2"
        class=" w-11/12 p-5 bg-white rounded overflow-hidden shadow-lg text-left flex flex-row justify-between bg-green-500"
      >
        kein Kontakt
      </div>
      <div
        v-if="res.threatLevel >= 2"
        class=" w-11/12 p-5 bg-white rounded overflow-hidden shadow-lg text-left flex flex-row justify-between bg-orange-500"
      >
        Kontakt festgestellt
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Scan",
  data () {
    return {
      loading: false,
      res: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    "$route": "fetchData"
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      
      this.axios
      .post('https://nq7whr1lw7.execute-api.eu-central-1.amazonaws.com/dev/checkin',
      {
        "checkinType" : "code",
        "enterTime"   : 12345678,
        "exitTime"    : new Date().toString(),
        "terminalID"  : 1,
        "userID"      : this.$route.params.uid
      },
      {
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'tokenHeader' : 'allow'
        }
      })
      .then(response => {
        console.log(response);
        this.res = response.data
      })
      .catch(error => {
        console.log(error)
        this.error = error
      })
      .finally(() => this.loading = false)      
    }
  }
};
</script>
<style lang="scss">
.main > * {
  margin: 15px 0;
}
</style>

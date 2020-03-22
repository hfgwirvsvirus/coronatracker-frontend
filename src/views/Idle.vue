<template>
  <div class="h-full py-5 flex flex-col justify-between items-center">
    <p class="w-11/12 text-4xl leading-snug font-bold">
      Willkommen beim <span class="text-primary">Corona</span>-Tracker.
    </p>

    <div
      class="card w-11/12 p-5 bg-white rounded overflow-hidden shadow-lg text-left flex flex-col justify-between"
    >
      <div class="font-bold text-lg text-black mb-2">Besucherzahl</div>
      <div class="flex flex-row font-normal">
        <div class="w-4/12 pr-1">
          <div class="w-full h-1 mb-2 bg-green"></div>
          <div class="text-sm font-green">kaum<br />besucht</div>
        </div>
        <div class="w-4/12 pr-1">
          <div class="w-full h-1 mb-2 bg-orange"></div>
          <div class="text-sm font-orange">mäßig<br />besucht</div>
        </div>
        <div class="w-4/12 pr-1">
          <div class="w-full h-1 mb-2 bg-lightgray"></div>
          <div class="text-sm font-gray">stark<br />besucht</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Idle"
};
</script>

<style lang="scss">
.card {
  height: 162px;
}
</style>

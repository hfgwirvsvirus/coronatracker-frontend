<template>
  <div class="main h-full py-5 flex flex-col justify-start items-center">
    <p class="w-11/12 text-4xl leading-snug font-bold text-gray">
      Ankunft bei
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
  </div>
</template>

<script>
export default {
  name: "Scan"
};
</script>
<style lang="scss">
.main > * {
  margin: 15px 0;
}
</style>

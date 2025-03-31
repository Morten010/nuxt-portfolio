<script setup lang="ts">
const gotWork = true;
</script>

<template>
  <div
    v-if="gotWork"
    class="border border-[#E84C3C] text-[#E84C3C] hover:text-[#FFB936] group hover:bg-[#E84C3C] transition-colors rounded-xl flex flex-col items-center justify-center gap-1 text-center cursor-pointer">
    <p class="text-sm font-semibold">Working at</p>
    <SvgsImprovingLogo class="mb-1" />
  </div>
  <div
    v-else
    class="border border-[#E84C3C] group hover:bg-[#E84C3C] transition-colors duration-200 p-3 rounded-xl grid place-content-center col-span-2 sm:col-span-1 cursor-pointer">
    <span class="relative flex h-3 w-3 m-1 mx-auto">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB936] transition-colors duration-200 group-hover:bg-[#FFB936] opacity-75"></span>
      <span
        class="relative inline-flex rounded-full h-3 w-3 bg-[#E84C3C] transition-colors duration-200 group-hover:bg-[#FFB936]"></span>
    </span>
    <h2
      class="text-xl text-[#211A14] group-hover:text-white font-semibold duration-200">
      {{ $t("availableWork") }}
    </h2>
  </div>
</template>

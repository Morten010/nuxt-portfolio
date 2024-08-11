<script setup lang='ts'>
</script>

<template>
  <div
    class="border border-[#47484b] group hover:bg-[#526FFF] transition-colors duration-200 p-3 rounded-xl grid place-content-center col-span-2 sm:col-span-1"
  >
    <span class="relative flex h-3 w-3 m-1 mx-auto">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#526FFF] transition-colors duration-200 group-hover:bg-[#15161A] opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-[#526FFF] transition-colors duration-200 group-hover:bg-[#15161A]"></span>
    </span>
    <h2
        class="text-xl font-semibold"
    >
      {{ $t('availableWork') }}
    </h2>
  </div>
</template>
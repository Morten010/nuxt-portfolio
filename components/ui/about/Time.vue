<script setup lang='ts'>
  import { type WakaTimeResponse } from "~/types";
  
  const { data } = await useFetch<WakaTimeResponse>('/api/codingTime')
  console.log(data.value);
</script>

<template>

  <div
    class="border border-[#47484b] p-3 rounded-xl"
  >
    <h3
      class="flex items-center gap-2 mb-1"
    >
      <icon name="radix-icons:clock" />
      Coding hours
    </h3>
    <p
      class="text-2xl font-semibold"
    >
      {{ formatTime(data?.data.data.total_seconds!) }}
    </p>
  </div>
</template>
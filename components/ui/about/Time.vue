<script setup lang='ts'>
  import { type WakaTimeResponse } from "~/types";
  
  const { data, error } = await useFetch<WakaTimeResponse>('/api/codingTime')

</script>

<template>

  <div
    class="border border-[#47484b] p-3 rounded-xl col-span-2 sm:col-span-1"
  >
    <h3
      class="flex items-center gap-2 mb-1"
    >
      <icon name="radix-icons:clock" />
      {{ $t('codingHours') }}
    </h3>
    <p
      class="text-2xl font-semibold"
    >
      {{ (error || data.error) ? '--' : formatTime(data?.data.data.total_seconds!) }}
    </p>
  </div>
</template>
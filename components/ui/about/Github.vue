<script setup lang="ts">
const { data, error, refresh } = await useAsyncData<{
  data: number;
}>("github-stars-total", () => $fetch("/api/github"));
</script>

<template>
  <NuxtLinkLocale
    to="https://github.com/Morten010"
    target="_blank"
    class="p-3 rounded-xl bg-[#e84c3c] font-medium group col-span-2 sm:col-span-1">
    <h1 class="flex items-center gap-2">
      <Icon
        class="group-hover:text-[#15161A] text-[#FFB936] transition-colors duration-200"
        name="ic:round-star" />
      {{ $t("githubTitle") }}
    </h1>
    <p class="text-2xl font-semibold">
      {{ error ? 10 : data?.data }} {{ $t("githubStars") }}
    </p>
  </NuxtLinkLocale>
</template>

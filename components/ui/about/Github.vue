<script setup lang='ts'>
    const { data, error, refresh } = await useAsyncData<{
        data: number
    }>(
        'github-stars-total',
        () => $fetch('/api/github')
    );

</script>

<template>
  <NuxtLink
    to="https://github.com/Morten010"
    target="_blank"
    class="border border-[#47484b] p-3 rounded-xl bg-[#526FFF] font-medium group"
  >
    <h1
        class="flex items-center gap-2"
    >
        <Icon class="group-hover:text-[#15161A] text-yellow-500 transition-colors duration-200" name="ic:round-star" /> {{ $t('githubTitle') }}
    </h1>
    <p
        class="text-2xl font-semibold"
    >
        {{ error ? 10 : data?.data }} {{ $t('githubStars') }}
    </p>
  </NuxtLink>
</template>
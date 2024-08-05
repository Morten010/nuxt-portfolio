<script setup lang="ts">
const route = useRoute();

const { data, error, refresh } = await useAsyncData(
  `content-${route.path}`,
  () => queryContent().where({ _path: route.path }).findOne()
);

useHead({
  title: data.value?.title || "Project does not exist",
  titleTemplate: "%s | project",
});
</script>

<template>
  <main
    class="w-full"
  >
    <section
      className="w-full aspect-video relative p-2 card-bg rounded-2xl overflow-hidden grid place-content-center mb-2"
      id="hero">
      <NuxtImg
        :src="data?.thumbnail"
        fill
        alt="map project"
        priority
        className="z-2 p-2 rounded-2xl opacity-[30%] object-cover absolute top-0 left-0 w-full h-full" />
      <h1 className="z-50 text-3xl sm:text-5xl lg:text-7xl font-semibold ">
        {{ data?.title }}
      </h1>
    </section>

      <!-- links -->
      <div
      className='py-2 flex gap-2 mb-4'
      >
        <NuxtLink
        className='card-bg p-2 text-2xl rounded hover:opacity-70 transition-opacity ease-in-out relative h-[42px]'
        :href="data?.github"
        target='_blank'
        rel='external'
        aria-label="View code"
        >
          <Icon name="bi:github" />
        </NuxtLink>
        <NuxtLink
        className='card-bg p-2 text-2xl rounded hover:opacity-70 transition-opacity ease-in-out h-[42px]'
        :href="data?.link"
        target='_blank' 
        rel='external'
        aria-label="view website"
        >
          <Icon name="mdi:eye" />
        </NuxtLink>
      </div>
      <!-- links -->
    <ContentRenderer id="renderedContent" v-if="data" :value="data" />
  </main>
</template>

<style scoped>
#renderedContent :deep(h1) {
  @apply text-3xl font-semibold mb-2;
}
</style>

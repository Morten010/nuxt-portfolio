<script setup lang="ts">
const route = useRoute();

const { data, error, refresh } = await useAsyncData(
  `content-${route.path}`,
  () => queryContent().where({ _path: route.path }).findOne()
);

console.log(data);
console.log(data.value);
console.log(error);


useHead({
  title: data.value?.title || "Project does not exist",
  titleTemplate: "%s | project",
});
</script>

<template>
  <main>
    <section
      className="w-full aspect-video relative p-2 card-bg rounded-2xl overflow-hidden grid place-content-center"
      id="hero">
      <Image
        :src="data?.thumbnail"
        fill
        alt="map project"
        priority
        className="z-2 p-2 rounded-2xl opacity-[30%] object-cover" />
      <h1 className="z-50 text-3xl sm:text-5xl lg:text-7xl font-semibold ">
        {{ data?.title }}
      </h1>
    </section>
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>

<style scoped>
/* main :deep(h1) {
  @apply text-2xl font-semibold;
} */
</style>

<script setup lang='ts'>
  import { watch } from 'vue';
  const { locale } = useI18n() 
  
  const { data, refresh } = await useAsyncData(`/projects/${locale.value}`, () => queryContent('/').where({ _locale: locale.value }).only(['title', 'thumbnail', 'description', '_path', '_locale']).find())
  
  watch(locale, async () => {
    await refresh();
  });
</script>

<template>
  <div
    class="pt-14 w-full"
  >
    <h1
      class='text-4xl font-bold inline-block mb-4 w-full text-center'
      >
        {{ $t('projectsPageTitle') }}
    </h1>
    <div
      class="py-[30px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
    >
      <UiProjectCard 
        v-for="project of data"
        :path="project._path!"
        :image="project.thumbnail"
        :title="project.title!"
        :description="project.description"
        :slug-as-params="project._path!.replace('/projects/', '')"
      />
    </div>
  </div>
</template>
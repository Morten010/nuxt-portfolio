<script setup lang="ts">
  import { watch } from 'vue' 
  import Youtube from '@/components/markdownComponents/Youtube.vue'

  const route = useRoute();
  const { locale } = useI18n() 
  
  const {
    params: {
      slug
    }
  } = route;

  const { data, error, refresh } = await useAsyncData(
    `content-${locale.value}-${slug}`,
    () => queryContent(`/projects/${locale.value}/${slug}`).where({
      _locale: locale.value,
    }).findOne()
  );
  
  watch(locale, async () => {
    await refresh();
  });
  
  useHead({
    title: data.value?.title || "Project does not exist",
    titleTemplate: "%s | project",
  });

  const components = {
    'youtube': Youtube
  }
  
</script>

<template>
  <main
    class="w-full"
    v-if="!error"
  >
    <section
      class="w-full aspect-video relative p-2 card-bg rounded-2xl overflow-hidden grid place-content-center mb-2"
      id="hero">
      <NuxtImg
        :src="data?.thumbnail"
        fill
        :alt="`${data?.title}`"
        priority
        class="z-2 p-2 rounded-2xl opacity-[30%] object-cover absolute top-0 left-0 w-full h-full" />
      <h1 class="z-50 text-3xl sm:text-5xl lg:text-7xl font-semibold ">
        {{ data?.title }}
      </h1>
    </section>

      <!-- links -->
      <div
      class='py-2 flex gap-2 mb-4'
      >
        <NuxtLink
        class='card-bg p-2 text-2xl rounded hover:opacity-70 transition-opacity ease-in-out relative h-[42px]'
        :href="data?.github"
        target='_blank'
        rel='external'
        aria-label="View code"
        data-umami-event="go to github"
        :data-umami-event-project="data?.title"
        >
          <Icon name="bi:github" />
        </NuxtLink>
        <NuxtLink
        class='card-bg p-2 text-2xl rounded hover:opacity-70 transition-opacity ease-in-out h-[42px]'
        :href="data?.link"
        target='_blank' 
        rel='external'
        aria-label="view website"
        data-umami-event="go to"
        :data-umami-event-project="data?.title"
        >
          <Icon name="mdi:eye" />
        </NuxtLink>
      </div>
      <!-- links -->
    <ContentRendererMarkdown
      id="renderedContent" 
      v-if="data" 
      :value="data" 
      :components="components"
    />
  </main>

  <main
    class="h-screen w-full grid place-content-center"
    v-if="error"
  >
    <h1
      class='text-4xl font-bold inline-block w-full text-center'
    >
      Project not found
    </h1>
    <p
      class="text-center text-white/35"
    >
      Go back <NuxtLinkLocale
        to="/"
        class="text-[#526FFF]"
      >
        Home
      </NuxtLinkLocale> 
    </p>
  </main>
</template>

<style scoped>
  #renderedContent :deep(h1) {
    @apply mt-4 scroll-m-20 text-4xl font-bold tracking-tight;
  }

  #renderedContent :deep(h2) {
    @apply pt-4 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0;
  }

  #renderedContent :deep(h3) {
    @apply mt-8 scroll-m-20 text-2xl font-semibold tracking-tight;
  }

  #renderedContent :deep(h4) {
    @apply mt-8 scroll-m-20 text-xl font-semibold tracking-tight;
  }

  #renderedContent :deep(h5) {
    @apply mt-8 scroll-m-20 text-lg font-semibold tracking-tight;
  }

  #renderedContent :deep(h6) {
    @apply mt-8 scroll-m-20 text-base font-semibold tracking-tight;
  }

  #renderedContent :deep(a) {
    @apply font-medium;
  }

  #renderedContent :deep(p) {
    @apply leading-7 mt-6;
  }

  #renderedContent :deep(ul) {
    @apply my-6 ml-6 list-disc;
  }

  #renderedContent :deep(ol) {
    @apply my-6 ml-6 list-decimal;
  }

  #renderedContent :deep(li) {
    @apply mt-2;
  }

  #renderedContent :deep(blockquote) {
    @apply mt-6 border-l-2 pl-6 italic;
  }

  #renderedContent :deep(blockquote *) {
    @apply text-gray-700;
  }

  /* #renderedContent :deep(img) {
    @apply w-full aspect-video;
  } */

  #renderedContent :deep(hr) {
    @apply my-4 md:my-8;
  }

  #renderedContent :deep(table) {
    @apply my-6 w-full overflow-y-auto;
  }

  #renderedContent :deep(tr) {
    @apply m-0 border-t p-0 even:bg-gray-700;
  }

  #renderedContent :deep(th) {
    @apply border px-4 py-2 text-left font-bold;
  }

  #renderedContent :deep(th[align="center"]) {
    @apply text-center;
  }

  #renderedContent :deep(th[align="right"]) {
    @apply text-right;
  }

  #renderedContent :deep(td) {
    @apply border px-4 py-2 text-left;
  }

  #renderedContent :deep(td[align="center"]) {
    @apply text-center;
  }

  #renderedContent :deep(td[align="right"]) {
    @apply text-right;
  }

  #renderedContent :deep(pre) {
    @apply mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4;
  }

  #renderedContent :deep(code) {
    @apply relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm;
  }

  #renderedContent :deep(video) {
    @apply w-full aspect-square;
  }
</style>

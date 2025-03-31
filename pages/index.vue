<script setup lang="ts">
const { locale } = useI18n();

const { getItems } = useDirectusItems();
const projects = await getItems({
  collection: "projects",
});

const runtimeConfig = useRuntimeConfig();
const getImageUrl = (image: string) => {
  console.log(image);

  if (image) {
    return `${runtimeConfig.public.directus.url || ""}/assets/${image}`;
  }
  return ""; // Return a placeholder or empty string if no image
};

console.log(getImageUrl(projects[0].thumbnail));

// Seo
defineOgImage({
  url: "/opengraph.png",
  alt: "Morten Rasmussen - Portfolio",
});

definePageMeta({
  title: {
    default: "Morten Rasmussen",
    template: "%s | portfolio",
  },
});
</script>

<template>
  <div>
    <!-- hero section -->
    <div class="bg-[#211A14] text-[#D6C9B9] px-4 py-10">
      <div class="container mx-auto">
        <section
          class="flex p-4 w-full pr-2 flex-col md:flex-row items-center pt-10 sm:pt-20 container">
          <article class="w-full md:w-[40%] flex flex-col gap-4">
            <h1 class="text-4xl sm:text-6xl font-bold !leading-[3.4rem]">
              Morten Rasmussen
            </h1>
            <p class="text-lg text-white/80">
              {{ $t("heroSubTitle") }}
            </p>
          </article>
          <aside
            class="w-full md:w-[60%] relative min-h-[40vh] overflow-hidden max-w-[calc(100vw-50px)]">
            <SvgsMap class="mx-auto" />
          </aside>
        </section>
      </div>
    </div>
    <!-- hero section -->

    <section class="py-32 text-center bg-[#E84C3C]">
      <div>
        <p class="jetBrain text-sm text-[#FFB936]">
          {{ $t("skillSubTitle") }}
        </p>
        <h2 class="text-5xl font-semibold text-[#D6C9B9]">
          {{ $t("skillTitle") }}
        </h2>
      </div>
      <UiSkillContainer />
    </section>

    <section class="py-16 text-[#211A14] container mx-auto">
      <h2 class="text-5xl font-semibold text-center">
        {{ $t("projectsTitle") }}
      </h2>
      <p class="jetBrain text-sm text-[#E84C3C] text-center font-light mt-2">
        {{ $t("projectsSubTitle") }}
      </p>
      <div
        class="py-[30px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-w-[calc(100vw-40px)] mx-auto">
        <UiProjectCard
          v-for="project of projects?.slice(0, 4)"
          :path="`/projects/${project.slug}`"
          :image="getImageUrl(project.thumbnail)"
          :title="project.title"
          :description="project.description"
          :slug-as-params="project.slug" />
      </div>
    </section>

    <!-- about -->
    <UiAboutMe class="mb-16" />
    <!-- about -->
  </div>
</template>

<script setup lang='ts'>
  const { locale } = useI18n() 
  
  const { data: projects, refresh } = await useAsyncData(`/projects/${locale.value}`, () => queryContent('/').where({ _locale: locale.value }).only(['title', 'thumbnail', 'description', '_path', '_locale']).find())
  
  watch(locale, async () => {
    await refresh();
  });

</script>

<template>
 <div>
  <!-- hero section -->
  <section
  class='flex p-4 w-full pr-2 flex-col sm:flex-row items-center pt-20'
  >
    <article
    class='w-full sm:w-[40%] flex flex-col gap-4'
    >
      <h1
      class="text-4xl sm:text-6xl font-bold !leading-[3.4rem]"
      >
        Morten Rasmussen
      </h1>
      <p
      class='text-lg text-white/35'
      >
        {{ $t('heroSubTitle') }}
      </p>
    </article>
    <aside
    class='w-full sm:w-[60%] relative min-h-[40vh] overflow-hidden'
    >
      <SvgsMap 
        class="mx-auto"
      />
    </aside>
  </section>
  <!-- hero section -->

  <section
    class="my-32 text-center"
  > 
    <div>
      <p
        class="jetBrain text-sm text-[#526FFF]"
      >
        {{ $t('skillSubTitle') }}
      </p>
      <h2 class='text-5xl font-semibold'>
        {{ $t('skillTitle') }}
      </h2>
    </div>
    <UiSkillContainer />
  </section>

  <section>
    <h2
      class='text-5xl font-semibold text-center'
    >
      {{ $t('projectsTitle') }}
    </h2>
    <p
      class="jetBrain text-sm text-white/35 text-center font-light mt-2"
    >
      {{ $t('projectsSubTitle') }}
    </p>
    <div
      class="py-[30px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
    >
    <UiProjectCard 
      v-for="project of projects"
      :path="project._path!"
      :image="project.thumbnail"
      :title="project.title!"
      :description="project.description"
      :slug-as-params="project._path!.replace('/projects/', '')"
    />
  </div>
  </section>

  <!-- about -->
  <UiAboutMe />
  <!-- about -->

 </div>
</template>

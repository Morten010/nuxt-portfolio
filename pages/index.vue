<script setup lang='ts'>
const { data: projects } = await useAsyncData('projects', () => queryContent('/').only(['title', 'thumbnail', 'description', '_path']).find())

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
      class='text-lg'
      >
        Web developer specializing in full-stack development. With the help of HTML, CSS, JavaScript, React, Next.js, Node.js, and MySQL
      </p>
    </article>
    <aside
    class='w-full sm:w-[60%] relative min-h-[40vh] overflow-hidden'
    >
      <!-- <NuxtImg
      src="/assets/pc.webp" 
      alt="pc" 
      fill priority
      class='absolute top-0 left-0 w-full h-full object-contain'
      /> -->
      <SvgsMap 
        class="mx-auto"
      />
    </aside>
  </section>
  <!-- hero section -->

  <section
    class="my-20 text-center"
  > 
    <div>
      <p
        class="jetBrain text-sm text-[#526FFF]"
      >
        some of my
      </p>
      <h2 class='text-5xl font-semibold'>
        Skills
      </h2>
    </div>
    <UiSkillContainer />
  </section>

  <div
      class="py-[30px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
    >
    <UiProjectCard 
      v-for="project of projects"
      :image="project.thumbnail"
      :title="project.title!"
      :description="project.description"
      :slug-as-params="project._path!.replace('/projects/', '')"
    />
  </div>

 </div>
</template>

<style>
.jetBrain{
  font-family: "JetBrains Mono", monospace;
}
</style>
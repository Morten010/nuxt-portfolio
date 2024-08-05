<script setup lang='ts'>

const { data: projects } = await useAsyncData('projects', () => queryContent('/').only(['title', 'thumbnail', 'description', '_path']).find())

console.log(projects.value)

</script>

<template>
 <div>
  <!-- hero section -->
  <section
  className='flex p-4 w-full pr-2 flex-col sm:flex-row items-center'
  >
    <article
    className='w-full sm:w-[40%] flex flex-col gap-4'
    >
      <h1
      className="text-4xl sm:text-6xl font-bold !leading-[3.4rem]"
      >
        Morten Rasmussen
      </h1>
      <p
      className='text-lg'
      >
        Web developer specializing in full-stack development. With the help of HTML, CSS, JavaScript, React, Next.js, Node.js, and MySQL
      </p>
    </article>
    <aside
    className='w-full sm:w-[60%] relative min-h-[40vh] overflow-hidden'
    >
      <NuxtImg
      src="/assets/pc.webp" 
      alt="pc" 
      fill priority
      className='absolute top-0 left-0 w-full h-full object-contain'
      />
    </aside>
  </section>
  <!-- hero section -->

  <section>
    <h2 className='p-4 pb-0 text-2xl font-semibold'>
      Skills
    </h2>
    <UiSkillContainer />
  </section>

  <div
      class="py-[30px]"
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
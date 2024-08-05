<script setup lang='ts'>

    const { data, error, refresh } = await useAsyncData(
    `projects-all`,
    () => queryContent().find()
    );
</script>

<template>
  <div>
    <h1
      className='text-4xl font-bold inline-block mb-4'
      >
        My Projects
      </h1>
    <div>
        <UiProjectCard 
            v-for="project of data"
            :image="project.thumbnail"
            :title="project.title!"
            :description="project.description"
            :slug-as-params="project._path!.replace('/projects/', '')"
        />
    </div>
  </div>
</template>
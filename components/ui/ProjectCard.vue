<script setup lang='ts'>
  import { type ProjectCardProps } from '~/types'
  const {
    classes,
    description,
    image,
    slugAsParams,
    title
  } = defineProps<ProjectCardProps>()
</script>

<template>
  <NuxtLink
  :href='`/projects/wireup`'
  :class="cn(
    'p-3 flex flex-col gap-2 card-bg rounded-3xl slide relative sm:w-full flex-grow',
    classes
  )"
  >
  <div
    class='w-full aspect-video relative rounded-2xl overflow-hidden'
    >
        <NuxtImg
          fill
          :src='image'
          alt='map project'
          class='object-cover absolute'
        />
    </div>
    <div 
    class='flex py-2 px-4 gap-3 items-center z-10'
    >
        <!-- <FaRulerCombined class='icons'/> -->
        <div>
            <h3
            class='font-semibold'
            >
                {{ title }}
            </h3>
            <p>
                {{ description }}
            </p>
        </div>
    </div>
  </NuxtLink>
</template>
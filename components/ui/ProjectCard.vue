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
  :className="cn(
    'p-3 flex flex-col gap-2 card-bg rounded-3xl slide relative max-w-[350px] w-full flex-grow',
    classes
  )"
  >
  <div
    className='w-full h-full aspect-video relative rounded-2xl overflow-hidden'
    >
        <NuxtImg
          fill
          :src='image'
          alt='map project'
          className='object-cover'
        />
    </div>
    <div 
    className='flex py-2 px-4 gap-3 items-center z-10'
    >
        <!-- <FaRulerCombined className='icons'/> -->
        <div>
            <h3
            className='font-semibold'
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
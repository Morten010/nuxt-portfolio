<script setup lang='ts'>
  import { type ProjectCardProps } from '~/types'
  import { ref, type VNodeRef } from "vue"
  import { cn } from "~/utils"
  const {
    classes,
    description,
    image,
    path,
    title
  } = defineProps<ProjectCardProps>()
  const parent = ref<VNodeRef | null>(null)
  const urlPath = `/projects/${path.split('/')[path.split('/').length - 1]}`  
  
  const handleTrailer = (e: MouseEvent) => {
    
  if (parent.value) {
    
    if(parent.value.style.opacity !== ''){
      parent.value.style.opacity = 1
    }
    const rect = parent.value.getBoundingClientRect()
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top
    
    parent.value.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.05) 0%, rgba(27,28,31,0) 100%)`
  }
}

const handleRemove = () => {
  if (parent.value) {
    parent.value.style.opacity = 0
  }
}
</script>

<template>
  <NuxtLink
  :href='urlPath'
  :class="cn(
    'p-3 flex flex-col gap-2 card-bg rounded-3xl slide relative sm:w-full flex-grow overflow-hidden',
    classes
  )"
  @mousemove="handleTrailer"
  @mouseleave="handleRemove"
  >
  <div 
    ref="parent"
    class="absolute top-0 left-0 pointer-events-none w-full h-full transition-all duration-200"
  />
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
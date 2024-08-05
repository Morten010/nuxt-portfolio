<script setup lang='ts'>
import { skills } from '~/constants'
</script>

<template>
  <div
    class="flex gap-2 p-4"
  >
    <div
        className='h-14 w-14 min-h-[3.5rem] min-w-[3.5rem] border border-white/20 rounded-lg grid place-content-center'
        aria-label={skill.name}
        v-for="skill of skills"
    >
        <!-- {{ skill.name }} -->
        <Icon :name="skill.icon" class="text-white text-4xl" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { skills } from '~/constants'

</script>

<template>
  <div
    class="flex gap-2 p-4 flex-wrap justify-center"
  >
    <UiSkillCard 
      v-for="skill of skills"
      :skill="skill"
    />
  </div>
</template>

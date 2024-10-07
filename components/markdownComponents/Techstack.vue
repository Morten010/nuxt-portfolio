<script setup lang='ts'>
import { projectSkills } from '~/constants';

const { locale } = useI18n() 
const {
    params: {
        slug
    }
} = useRoute()

const skills = projectSkills[slug as 'db-center'][locale.value as 'da' | 'en']

</script>

<template>
  <div
    class="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5"
  >
    <MarkdownComponentsTechCard 
        v-for="skill in skills"
        :skill="skill"
    />
  </div>
</template>
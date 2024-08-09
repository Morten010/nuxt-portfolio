<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from 'vue';
import { helloTranslations } from '~/constants';

const props = defineProps<{ isActive: boolean }>();
const emit = defineEmits(['update:isActive']);

const choosenWord = ref('');
let intervalId: NodeJS.Timeout | null = null;

function displayTranslations() {
  let index = 0;

  const updateWord = () => {
    choosenWord.value = helloTranslations[index];
    index += 1;

    if (index >= helloTranslations.length) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      document.body.style.overflow = "unset";
      emit('update:isActive', false); // Emit event to update isActive
    }
  };

  updateWord();
  intervalId = setInterval(updateWord, 200);
}

onMounted(() => {
  if (props.isActive) {
    displayTranslations();
  }
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-[#15161A] z-[1000] grid place-content-center">
    <div
      class="flex gap-3 items-center"
    >
      <div 
        class="w-4 h-4 rounded-full bg-white"
      />
      <p class="text-5xl  text-white">
        {{ choosenWord ? choosenWord : 'Hello' }}
      </p>
    </div>
  </div>
</template>

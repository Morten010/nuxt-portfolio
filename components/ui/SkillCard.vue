<script setup lang='ts'>
    const {} = defineProps<{
        skill: {
            name: string;
            icon: string;
        }
    }>()
    import { ref } from 'vue' 

    const open = ref(false)
</script>

<template>
    <div
        class='h-14 w-14 min-h-[3.5rem] min-w-[3.5rem] border border-white/20 rounded-lg grid place-content-center relative'
        :aria-label="skill.name"
        @mouseenter="open = true"
        @mouseleave="open = false"
        @touchstart="open = true"
        @touchend="open = false"
    >
        <Transition>
            <p
                class="absolute -top-2 left-2/4 -translate-x-2/4 -translate-y-full whitespace-nowrap bg-white text-black px-2 py-1 rounded font-medium"
                v-if="open"
            >
                {{ skill.name }}
            </p>
        </Transition>
        <Icon :name="skill.icon" class="text-white text-4xl" />
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
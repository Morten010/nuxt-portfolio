<script setup lang='ts'>
import { ref } from 'vue'
const { locale, setLocale } = useI18n()
const open = ref(false)

const handleLocaleChange = (locale: 'da' | 'en') => {
    setLocale(locale)
    open.value = false
}

</script>

<template>
    <div class="relative">
        <div class="flex place-content-center grayscale hover:grayscale-0 transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-2 h-full relative"
            @click="open = !open">
            <NuxtImg :src="locale == 'da' ? '/icons/danish.svg' : '/icons/english.svg'" class="w-5 h-5" />
        </div>
        <Transition mode="out-in">
            <div class="absolute -bottom-4 translate-y-full flex gap-3 -translate-x-2/4 left-2/4" v-if="open">
                <div class="relative group">
                    <div class="min-w-8 min-h-8 max-h-8 max-w-8 bg-[#1b1c21] border-white/20 border text-white rounded-full grayscale hover:grayscale-0 hover:scale-110 transition-all duration-200 p-0 inline-block cursor-pointer"
                        @click="handleLocaleChange('da')">
                        <NuxtImg src="/icons/danish.svg" class="w-full h-full" />
                    </div>
                    <div
                        class="absolute left-2/4 -translate-x-2/4 bottom-1 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-10 text-sm text-white/40 pointer-events-none">
                        Danish
                    </div>
                </div>
                <div class="relative group">
                    <div class="min-w-8 min-h-8 max-h-8 max-w-8 bg-[#1b1c21] border-white/20 border text-white rounded-full grayscale hover:grayscale-0 hover:scale-110 transition-all duration-200 p-0 inline-block cursor-pointer"
                        @click="handleLocaleChange('en')">
                        <NuxtImg src="/icons/english.svg" class="w-full h-full" />
                    </div>
                    <div
                        class="absolute left-2/4 -translate-x-2/4 bottom-1 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-10 text-sm text-white/40 pointer-events-none">
                        English
                    </div>
                </div>
            </div>
        </Transition>

    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script setup lang='ts'>
    import { ref, onMounted } from 'vue'
    const { locale, setLocale } = useI18n()
    const open = ref(false)
    const container = ref<HTMLElement>()

    const handleLocaleChange = (locale: 'da' | 'en') => {
        setLocale(locale)
        open.value = false
    }

    const handleClickOutside = (event: Event) => {
        if (container.value && !container.value.contains(event.target as Node)) {
            open.value = false
        }
    }

    onMounted(() => {
        document.addEventListener('mousedown', handleClickOutside)
    })

    onUnmounted(() => {
        document.removeEventListener('mousedown', handleClickOutside)
    })
</script>

<template>
    <div 
        class="relative"
        ref="container"
    >
        <div class="flex place-content-center grayscale hover:grayscale-0 transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-2 h-full relative cursor-pointer"
            @click="open = !open">
            <NuxtImg :src="locale == 'da' ? '/icons/danish.svg' : '/icons/english.svg'" class="w-5 h-5" />
        </div>
        <Transition mode="out-in">
            <div class="absolute -top-[60vw] sm:top-[unset] bottom-[unset] sm:-bottom-4 -translate-y-full sm:translate-y-full flex gap-8 sm:gap-3 -translate-x-2/4 left-2/4" v-if="open">
                <div class="relative group">
                    <div class="min-w-32 sm:min-w-8 min-h-32 sm:min-h-8 max-h-8 max-w-8 bg-[#1b1c21] border-white/20 border text-white rounded-full grayscale hover:grayscale-0 hover:scale-110 transition-all duration-200 p-0 inline-block cursor-pointer"
                        @click="handleLocaleChange('da')">
                        <NuxtImg src="/icons/danish.svg" class="w-full h-full" />
                    </div>
                    <div
                        class="absolute left-2/4 -translate-x-2/4 bottom-1 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-10 text-xl font-semibold sm:text-sm text-white pt-2 sm:pt-0 sm:text-white/40 pointer-events-none">
                        {{ $t('langDa') }}
                    </div>
                </div>
                <div class="relative group">
                    <div class="min-w-32 sm:min-w-8 min-h-32 sm:min-h-8 max-h-8 max-w-8 bg-[#1b1c21] border-white/20 border text-white rounded-full grayscale hover:grayscale-0 hover:scale-110 transition-all duration-200 p-0 inline-block cursor-pointer"
                        @click="handleLocaleChange('en')">
                        <NuxtImg src="/icons/english.svg" class="w-full h-full" />
                    </div>
                    <div
                        class="absolute left-2/4 -translate-x-2/4 bottom-1 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-10 text-xl font-semibold sm:text-sm text-white pt-2 sm:pt-0 sm:text-white/40 pointer-events-none">
                        {{ $t('langEn') }}
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
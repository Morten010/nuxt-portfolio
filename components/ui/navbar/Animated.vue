<script setup lang='ts'>
import { navLinks } from '~/constants';
import { cn } from '#imports';

</script>

<template>
    <div
        class="fixed bottom-0 top-[unset] sm:bottom-[unset] sm:top-0 left-0 w-full p-4 z-50 flex justify-center"
    >
        <div
            class="bg-[#15161a]/85 rounded-full"
        >
            <nav
                class="flex gap-1 justify-between border border-[#3C3E4D]/85 bg-[#27272D/20] backdrop-blur-sm px-4 py-2 max-w-screen-xl mx-auto rounded-full items-center"
            >
                <template
                    v-for="link in navLinks"
                >
                    <NuxtLinkLocale
                        v-if="link.type === 'link'"
                        :to="link.href"
                        :target="link.offpage ? '_blank' : undefined"
                        :class="cn(
                            'grid place-content-center text-white/30 hover:text-white transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-2 h-full',
                            {
                                'grid place-content-center grayscale hover:grayscale-0 transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-1.5 h-full': link.icon.includes('')
                            }
                        )"
                        :aria-label="`go to ${link.title}`"
                    >
                        <NuxtImg 
                            :src="link.icon"
                            class="w-6 h-6"
                            :alt="link.title"
                            v-if="link.icon.includes('/')"
                        />
                        <Icon 
                            v-else
                           :name="link.icon" 
                            class="w-5 h-5"
                        />
                    </NuxtLinkLocale>

                    <div 
                        v-if="link.type === 'divider'"
                        class="h-[30px] border border-l border-white/10 inline-block"
                    />

                    <UiNavbarChangeLocale 
                        v-if="link.type === 'i18n'"
                    />
                </template>
            </nav>
        </div>
    </div>
</template>
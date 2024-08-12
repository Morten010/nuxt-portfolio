<script setup lang='ts'>
</script>

<template>
    <div
        class="fixed bottom-0 top-[unset] sm:bottom-[unset] sm:top-0 left-0 w-full p-4 z-50 flex justify-center"
    >
        <div
            class="bg-[#15161a]/85 rounded-full"
        >
            <nav
                class="flex gap-1 justify-between border border-[#3C3E4D]/85 bg-[#27272D/20] backdrop-blur-sm p-2 max-w-screen-xl mx-auto rounded-full items-center"
            >
                <NuxtLinkLocale
                    to="/"
                    class="grid place-content-center grayscale hover:grayscale-0 transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-1.5 h-full"
                >
                    <NuxtImg 
                        src="/icons/home.svg"
                        class="w-6 h-6"
                    />
                </NuxtLinkLocale>
                <NuxtLinkLocale
                    to="/projects"
                    class="grid place-content-center grayscale hover:grayscale-0 transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-1.5 h-full"
                >
                    <NuxtImg 
                        src="/icons/project.svg"
                        class="w-6 h-6"
                    />
                </NuxtLinkLocale>
                
                <!-- divider -->
                <div 
                    class="h-[30px] border border-l border-white/10 inline-block"
                />
                <!-- divider -->

                <UiNavbarChangeLocale />

                <!-- divider -->
                <div 
                    class="h-[30px] border border-l border-white/10 inline-block"
                />
                <!-- divider -->

                <NuxtLinkLocale
                    to="https://github.com/Morten010"
                    class="grid place-content-center text-white/30 hover:text-white transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-2 h-full"
                >
                    <Icon 
                        name="uiw:github" 
                        class="w-5 h-5"
                    />
                </NuxtLinkLocale>
                <NuxtLinkLocale
                    to="https://www.linkedin.com/in/morten-rasmussen-269564182/"
                    class="grid place-content-center text-white/30 hover:text-white transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-2 h-full mr-2"
                >
                    <Icon 
                        name="uiw:linkedin" 
                        class="w-5 h-5"
                    />
                </NuxtLinkLocale>
                
            </nav>
        </div>
    </div>
</template>
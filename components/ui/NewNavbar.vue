<script setup lang='ts'>
</script>

<template>
    <div
        class="fixed top-0 left-0 w-full p-4 z-50 flex justify-center"
    >
        <div
            class="bg-[#15161a]/85 rounded-full"
        >
            <nav
                class="flex gap-1 justify-between border border-[#3C3E4D]/85 bg-[#27272D/20] backdrop-blur-sm p-2 max-w-screen-xl mx-auto rounded-full items-center"
            >
                <NuxtLink
                    to="/"
                    class="grid place-content-center grayscale hover:grayscale-0 transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-1.5 h-full"
                >
                    <Icon 
                        class="w-6 h-6"
                        name="self:home" 
                    />
                </NuxtLink>
                <NuxtLink
                    to="/projects"
                    class="grid place-content-center grayscale hover:grayscale-0 transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-1.5 h-full"
                >
                    <Icon 
                        class="w-6 h-6"
                        name="self:projects" 
                    />
                </NuxtLink>
                
                <!-- divider -->
                <div 
                    class="h-[30px] border border-l border-white/10 inline-block"
                />
                <!-- divider -->

                <NuxtLink
                    to=""
                    class="grid place-content-center text-white/30 hover:text-white transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-2 h-full"
                >
                    <Icon 
                        name="uiw:github" 
                        class="w-5 h-5"
                    />
                </NuxtLink>
                <NuxtLink
                    to=""
                    class="grid place-content-center text-white/30 hover:text-white transition-all duration-200 hover:bg-white/5 aspect-square rounded-full p-2 h-full mr-2"
                >
                    <Icon 
                        name="uiw:linkedin" 
                        class="w-5 h-5"
                    />
                </NuxtLink>
                
            </nav>
        </div>
    </div>
</template>
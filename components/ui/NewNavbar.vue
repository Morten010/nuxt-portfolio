<script setup lang='ts'>
</script>

<template>
    <div
        class="fixed top-0 left-0 w-full p-4 z-50"
    >
        <nav
            class="flex gap-2 justify-between border border-[#3C3E4D]/85 bg-[#27272D/20] backdrop-blur-sm p-3 max-w-screen-xl mx-auto rounded items-end"
        >
            <div
                class="flex gap-3 items-end"
            >
                <h1
                    class="text-2xl"
                >
                    Morten
                </h1>
                <NuxtLink
                    to="/"
                    class="opacity-65 hover:opacity-100 transition-all duration-100"
                >
                    Home
                </NuxtLink>
                <NuxtLink
                    to="/projects"
                    class="opacity-65 hover:opacity-100 transition-all duration-100"
                >
                    Projects
                </NuxtLink>
            </div>

            <div
                class="flex gap-4 items-end"
            >
                <NuxtLink
                href="https://www.linkedin.com/in/morten-rasmussen-269564182/"
                class="text-[#AAAEB9] hover:text-white transition-colors duration-100"
                target='_blank'
                aria-label="Linkedin"
                >
                    <Icon name="bi:linkedin" size="20" />
                </NuxtLink>
                <NuxtLink
                href="https://github.com/Morten010"
                class="text-[#AAAEB9] hover:text-white transition-colors duration-100"
                target='_blank'
                >
                    <Icon name="bi:github" size="20" />
                </NuxtLink>
                <a
                    href="mailto:itismorten@outlook.com"
                    class="py-1 px-2 bg-[#526FFF] hover:bg-[#526FFF]/60 rounded font-medium transition-colors duration-100"
                >
                    Contact Me
                </a>
            </div>
        </nav>
    </div>
</template>
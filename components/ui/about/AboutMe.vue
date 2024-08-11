<script setup lang='ts'>
</script>

<template>
    <section
        class="flex flex-col gap-2 mt-20 sm:max-w-[800px] mx-auto max-w-[calc(100vw-50px)]"
    >
        <div
            class="mb-4"
        >
            <p
                class="text-center text-sm text-[#526FFF] jetBrain"
            >
                {{ $t('aboutMeSubTitle') }}
            </p>
            <h2 
                class="text-5xl font-semibold text-center mb-2 leading-10"
            >
                {{ $t('aboutMeTitle') }}
            </h2>
        </div>
        <div
            class="grid grid-cols-2 gap-4"
        >
            <UiAboutTime />
            <UiAboutGithub />
            <UiAboutWork />
            <UiAboutContact />
        </div>
    </section>
</template>
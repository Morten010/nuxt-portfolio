<script setup lang='ts'>
</script>

<template>
    <div
        class="border border-[#47484b] p-3 rounded-xl col-span-2 sm:col-span-1"
    >
        <h2
            class="flex items-center gap-2 mb-2"
        >
            <Icon name="ph:link" /> {{ $t('connectTitle') }}
        </h2>

        <div>
            <a
                href="mailto:itismorten@outlook.com"
                class="flex items-center gap-2 text-white/60 hover:text-[#526FFF] transition-colors duration-100 font-medium"
            >
                <Icon name="lucide:mail" /> itismorten@outlook.com
            </a>
        </div>
    </div>
</template>
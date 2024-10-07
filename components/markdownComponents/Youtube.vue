<script setup lang='ts'>

const { src } = defineProps<{
    src: string
}>()

</script>

<template>
    <iframe 
        className='w-full aspect-video mt-2 mb-4'
        :src="src" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
    />
</template>
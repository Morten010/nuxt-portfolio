<script setup lang="ts">
  import { ref } from 'vue';

  // Seo
  defineOgImage({
    url: '/opengraph.png',
    alt: "Morten Rasmussen - Portfolio",
  })

  const i18nHead = useLocaleHead({

  })
  useHead({
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang
    },
    link: [...(i18nHead.value.link || []), { rel: 'icon', type: 'image/png', href: '/4.icon.ico' }],
    meta: [...(i18nHead.value.meta || [])],
    script: [ { defer: true, src: 'https://analytics.mortenra.com/script.js', "data-website-id": "a5788d8c-0d10-4445-ae9b-42945b13e4cb" }]
  })

  useSeoMeta({
  ogImage: '/opengraph.png',
  twitterTitle: 'Morten Rasmussen | Portfolio',
  twitterDescription: 'Webdeveloper from denmark.',
  twitterImage: '/twitter-image.png',
  twitterCard: 'summary_large_image'
})




  // vue
  const isActive = ref(true); 

  function handleUpdateIsActive(newValue: boolean) {
    isActive.value = newValue;
  }
</script>

<template>
  <Transition mode="out-in">
    <StartingPage 
      :isActive="isActive" 
      @update:isActive="handleUpdateIsActive" 
      v-if="isActive"
    />
  </Transition>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!-- scoped css -->
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>

<!-- global css -->
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.jetBrain{
  font-family: "JetBrains Mono", monospace;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  background-color: #15161A;  
  color: #fafafa;
  overflow-x: hidden;
  font-family: "Manrope", sans-serif;
  scroll-behavior: smooth;
  overflow: hidden;
}

/* navbar */
.nav{
  @apply flex flex-col gap-2 text-lg p-1 text-[#AAAEB9] rounded-full  border border-[#47484B] relative
}
.nav a{
  z-index: 100;
}
.card-bg{
  background-color: #1B1C1F;
  background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.60), 0px 2px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(20px);
  @apply border border-[#47484B]

}

.icons{
  @apply text-[#AAAEB9] text-xl
}
/* navbar */

/* custom carousel */
.scrollable{
  position: relative;
  width: 100vw;
  left: -75px;
  padding: 30px 40px 30px 75px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
  overflow-y: visible;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;  /* Firefox */
  
}
.empty-slide{
  width: 55px;
}
.scrollable::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
  overflow-y: visible;
}
/* slide snapping dosent work when padding needed */
/* .slide {
  scroll-snap-align: start; ruin spacing
} */
/* custom scrollbar */
::-webkit-scrollbar {
  background-color: transparent;
  width: 11px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  background-clip: padding-box;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* custom carousel */

/* mouse trailer */
.trailer{
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;

  position: fixed;
  left: 0;
  top: 0;

  opacity: 0;
  transition: opacity 500ms ease;

  font-size: 20px;
}
.card-bg:hover > .trailer{
  opacity: 1;
  cursor: none;
}
/* trailor */

</style>
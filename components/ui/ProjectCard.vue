<script setup lang="ts">
import { type ProjectCardProps } from "~/types";
import { ref, type VNodeRef } from "vue";
import { cn } from "~/utils";
const { classes, description, image, path, title } =
  defineProps<ProjectCardProps>();
const parent = ref<VNodeRef | null>(null);
const urlPath = `/projects/${path.split("/")[path.split("/").length - 1]}`;
</script>

<template>
  <NuxtLinkLocale
    :href="urlPath"
    :class="
      cn(
        ' flex flex-col gap-2 p-2 slide relative w-full sm:w-full flex-grow overflow-hidden text-[#211A14] border border-[#E84C3C]/50 hover:bg-[#E84C3C] duration-200 transition-all group',
        classes
      )
    ">
    <div
      class="w-full aspect-video relative overflow-hidden border border-[#E84C3C]/50 group-hover:border-[#D6C9B9] transition-all duration-200">
      <NuxtImg
        fill
        :src="image"
        :alt="`${title} project`"
        class="object-cover absolute z-10" />
      <SvgsPattern
        class="group-hover:text-[#D6C9B9] text-[#E84C3C] duration-200 transition-all scale-105" />
    </div>
    <div class="flex pb-4 pt-2 px-4 gap-3 items-center z-10">
      <!-- <FaRulerCombined class='icons'/> -->
      <div class="group-hover:text-[#D6C9B9] transition-all duration-200">
        <h3 class="font-semibold text-lg text-[FFB936]">
          {{ title }}
        </h3>
        <p class="line-clamp-1 opacity-80">
          {{ description }}
        </p>
      </div>
    </div>
  </NuxtLinkLocale>
</template>

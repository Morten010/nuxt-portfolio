<script setup lang="ts"></script>

<template>
  <div
    class="border border-[#E84C3C] text-[#E84C3C] p-3 rounded-xl col-span-2 sm:col-span-1 group hover:bg-[#E84C3C] hover:text-white duration-200 transition-all">
    <h2 class="flex items-center gap-2 mb-2 font-semibold">
      <Icon name="ph:link" /> {{ $t("connectTitle") }}
    </h2>

    <div>
      <a
        href="mailto:itismorten@outlook.com"
        class="flex items-center gap-2 text-E84C3C/60 hover:text-[#FFB936] font-medium">
        <Icon name="lucide:mail" /> itismorten@outlook.com
      </a>
    </div>
  </div>
</template>

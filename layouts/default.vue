<script setup lang='ts'>
</script>

<template>
    <main class=" min-h-screen w-full relative">
        <UiNewNavbar />
        <!-- background grid -->
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fafafa10_1px,transparent_1px),linear-gradient(to_bottom,#fafafa10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"/>
        <!-- background grid end -->
        <div class="max-w-screen-xl m-auto min-h-screen flex px-4 py-10 gap-4 w-full">
            <slot />    
        </div>
    </main>
</template>
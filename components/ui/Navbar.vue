<script setup lang='ts'>
</script>

<template>
  <nav 
    className='nav card items-center !pt-3'
    >
        <NuxtLink
            href="/"
            aria-label="home"
            class="px-2 py-1 hover:text-white transition-colors duration-100"
        >
            <Icon name="fa6-solid:house-chimney" />
        </NuxtLink>
        <NuxtLink 
            href='/projects'
            aria-label="Projects"
            class="px-2 py-1 hover:text-white transition-colors duration-100"
        >
            <Icon name="bi:palette-fill" />
        </NuxtLink>
       
        <!-- seperator line  -->
        <!-- <div className='border-b border-[#47484B]'></div> -->
        <!-- seperator line  -->

        <!-- seperator line  -->
        <div className='border-b border-[#47484B] w-full'></div>
        <!-- seperator line  -->

        <NuxtLink
        href="https://www.linkedin.com/in/morten-rasmussen-269564182/"
        className="px-2 py-1 hover:text-white transition-colors duration-100"
        target='_blank'
        aria-label="Linkedin"
        >
            <Icon name="bi:linkedin" />
        </NuxtLink>
        <NuxtLink
        href="https://github.com/Morten010"
        className="px-2 py-1 hover:text-white transition-colors duration-100"
        target='_blank'
        >
            <Icon name="bi:github" />
        </NuxtLink>
    </nav>
</template>
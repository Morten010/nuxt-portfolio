<script setup lang='ts'>

const hover = ref(false)

const { skill } = defineProps<{
    skill: {
        name: string;
        description: string;
        icon: string;
        color: string;
    }
}>()

</script>

<template>
    <div
        class="flex gap-4 !mt-0 card-bg p-3 rounded-lg cursor-pointer transition-all"
        :style=" hover ? {
            borderColor: `${skill.color}70`
        } : undefined"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
        <div
            :class="`!mt-0 border rounded-md min-w-14 min-h-14 grid place-content-center border-white/20 text-white/20 mb-auto transition-all`"
            :style=" hover ? {
                borderColor: `${skill.color}70`,
                color: `${skill.color}70`,
                backgroundColor: `${skill.color}05`,
                
            } : undefined"
        >
            <Icon 
                :name="skill.icon" 
                size="38"
            />
        </div>
        <div
            class="!mt-0"
        >
            <h3
                class="!text-xl !font-medium !mt-0"
            >
                {{ skill.name }}
            </h3>
            <p
                class="!mt-0 text-sm text-[#A1A2A3] font-medium tracking-wide !leading-6"
            >
                {{ skill.description }}
            </p>
        </div>
    </div>
</template>
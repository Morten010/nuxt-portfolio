<script setup lang='ts'>
import { projectFeatures } from '~/constants';

const { locale } = useI18n() 
const {
    params: {
        slug
    }
} = useRoute()
console.log(locale);


const features = projectFeatures[slug as 'db-center'][locale.value as 'da' | 'en']
</script>

<template>
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4"
    >
        <div
            class="card-bg p-4 rounded-md flex flex-col items-start"
            v-for="feature in features"
        >
            <div
                class="border border-[#607bff]/20 text-[#4f6bf7]/70 w-11 h-11 grid place-content-center rounded mb-2 bg-[#607bff]/10"
            >
                <Icon 
                    :name="feature.icon"
                    size="38"
                />
            </div>
            <div
                class="!mt-0"
            >
                <h3
                    class="!mt-0"
                >
                    {{ feature.title }}
                </h3>
                <p
                    class="!mt-0 text-[#A1A2A3]"
                >
                    {{ feature.description }}
                </p>
            </div>
        </div>
    </div>
</template>
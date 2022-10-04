<template>
    <div class="bg-gray-800 h-screen text-white">
        <header class="py-16">
            <h1 class="text-5xl font-bold text-center mb-6">Create Tailwind</h1>
            <p className="text-center mb-6 text-xl">If you like this project, consider giving it a star on GitHub!</p>

            <div class="flex flex-row justify-center items-center gap-4">
                <a
                    class="github-button"
                    href="https://github.com/andrejjurkin/create-tailwind-app"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star andrejjurkin/create-tailwind-app on GitHub"
                >
                    Star
                </a>
                <a
                    class="github-button"
                    href="https://github.com/andrejjurkin/create-tailwind-app/discussions"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-icon="octicon-comment-discussion"
                    data-size="large"
                    aria-label="Discuss andrejjurkin/create-tailwind-app on GitHub"
                >
                    Discuss
                </a>
            </div>
        </header>

        <div class="flex gap-16 items-center justify-center">
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="w-24 h-24" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="./assets/vue.svg" class="w-24 h-24" alt="Vue logo" />
            </a>
        </div>

        <main class="text-center">
            HALLOWED BE THY NAMES
            <div v-for="{ name } in data" :key="name">{{ name }}</div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

onMounted(() => {
    const script = document.createElement("script")

    script.src = "https://buttons.github.io/buttons.js"
    script.async = true

    document.body.appendChild(script)
})

const data = ref<{ name: string }[]>([])

onMounted(() => {
    fetch("/api/data")
        .then(res => res.json())
        .then(jsonRes => (data.value = jsonRes))
})
</script>

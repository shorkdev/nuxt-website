<script setup>
const route = useRoute();
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});

useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
});
</script>

<template>
  <!-- <title>{{ route.path }}</title> -->
  <div
    class="bg-zinc-300 text-black dark:bg-zinc-950 dark:text-white transition-colors h-fit w-screen p-2"
  >
    <!-- <NuxtLayout> -->
    <nav class="mb-1 pb-1 text-lg flex items-center">
      <!-- mb-1 mx-2 pb-1 -->
      <NuxtLink to="/" class="link">home</NuxtLink>
      &#160;|&#160;
      <NuxtLink to="/blog" class="link">blog</NuxtLink>
      &#160;|
      <ClientOnly>
        <UButton
          :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'"
          color="gray"
          variant="ghost"
          size="xs"
          aria-label="Theme"
          @click="isDark = !isDark"
        />

        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly>
    </nav>
    <NuxtPage />
    <UNotifications />
    <!-- <div
        class="mx-2 h-[95vh] p-4 rounded-xl border-2 border-zinc-400 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900"
      >
      </div> -->
    <!-- </NuxtLayout> -->
  </div>
</template>

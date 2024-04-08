<script setup>
const route = useRoute();
const toast = useToast();
const appConfig = useAppConfig();
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
  <div
    class="bg-zinc-300 text-black dark:bg-zinc-950 dark:text-white transition-colors h-fit w-screen p-2"
  >
    <nav class="mb-1 pb-1 text-lg flex items-center">
      <NuxtLink to="/" class="link">home</NuxtLink>
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
  </div>
</template>

<template>
  <title>/</title>
  <div>
    <UCard class="w-full md:w-[48rem]">
      <template #header>
        <div class="flex flex-col md:flex-row gap-2">
          <div>
            <NuxtImg
              src="https://avatars.githubusercontent.com/u/111064437?v=4"
              class="w-auto h-64 rounded-lg"
            />
            <p class="text-lg">shorko</p>
            <p class="text-gray-500 dark:text-gray-400">@shorko_owo</p>
          </div>
          <div> <!-- class="max-h-72 pr-4 overflow-scroll" -->
            <h2 class="font-bold">about me</h2>
            <p class="text-lg">hi! i am shorko, a web developer <br> 
              <h4 class="font-semibold">languages i use:</h4> 
              <ul class="list-disc pl-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li><strike>Luau</strike> (fuck you roblox)</li>
              </ul>
              <h4>libraries i use: </h4>
              <ul>
                <li>
                  <h5>frontend</h5>
                  <ul class="list-disc pl-4">
                    <li>TailwindCSS</li>
                    <li>Nuxt UI</li>
                    <li>Bootstrap</li>
                    <li>Nuxt</li>
                    <li>Astro</li>
                  </ul>
                </li>
                <li>
                  <h5>backend</h5>
                  <ul class="list-disc pl-4">
                    <li>discord.js</li>
                    <li>express.js</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </template>
      <h2>links</h2>
      <div class="flex flex-col gap-2 w-fit">
        <LinkBtn
          label="G I T H U B"
          icon="i-tabler-brand-github"
          url="https://github.com/shorkdev"
        />
        <UButton 
          label="Donate (Monero)"
          class="transition-colors"
          trailing-icon="i-tabler-clipboard"
          :ui="{ rounded: 'rounded-full' }"
          variant="outline"
          @click="copyxmr()"
        />
      </div>
    </UCard>
  </div>
</template>

<script setup>
const toast = useToast();
const xmraddress =
  '86XvLm6rnK6TcnVfq6ARmoKu4dNVZ87nCYBbNPkN3AaeUDYAoEQ1L6sgp81sicYG1j8WuD2nDRFKaaExQqYBKU3w3ECRQDf';
  
const copyxmr = () => {
  navigator.clipboard.writeText(xmraddress)
  toast.add({ title: 'Copied to clipboard', description: 'Copied address to clipboard!', icon: 'i-tabler-clipboard-check' })
}
</script>

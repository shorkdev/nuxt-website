<script setup>
const props = defineProps({
  label: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String, required: true },
});
</script>

<template>
  <div>
    <UButton
      :label="label"
      class="transition-colors"
      :icon="icon"
      trailing-icon="i-tabler-arrow-up-right"
      :to="url"
      target="_self"
      :ui="{ rounded: 'rounded-full' }"
      variant="outline"
    />
  </div>
</template>

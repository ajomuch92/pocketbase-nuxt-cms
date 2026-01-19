<template>
  <div class="flex items-center justify-center h-dvh w-full bg-muted relative">
    <RouterLink
      v-if="showGoHome"
      to="/"
      class="absolute top-4 left-4"
    >
      <AppLogo class="w-auto h-6 shrink-0" />
    </RouterLink>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const { showGoHome = true } = defineProps<{
  showGoHome?: boolean
}>()
</script>

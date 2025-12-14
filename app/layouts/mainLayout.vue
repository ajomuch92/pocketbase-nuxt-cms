<template>
  <div>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>

        <TemplateMenu />
      </template>

      <template #right>
        <UColorModeButton />

        <NuxtLink to="/login">
          <UButton
            class="cursor-pointer"
            aria-label="Login"
            icon="i-lucide-log-in"
            color="primary"
            variant="ghost"
          >
            Login
          </UButton>
        </NuxtLink>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Pocketbase Nuxt CMS• {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </div>
</template>

<script lang="ts" setup></script>

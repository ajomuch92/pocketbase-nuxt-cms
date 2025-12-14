<template>
  <UPageCard class="w-full max-w-md">
    <UAuthForm
      title="Login"
      description="Enter your credentials to access your account."
      icon="i-lucide-users"
      :fields="fields"
      :submit="{ label: 'Login', color: 'primary', class: 'cursor-pointer', size: 'lg' }"
      @submit="onSubmit"
    />
    <p>
      Don't have an account? <NuxtLink
        to="/register"
        class="text-primary hover:underline"
      >Register</NuxtLink>
    </p>
  </UPageCard>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

definePageMeta({
  name: 'Login',
  layout: 'full-layout'
})

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true,
  size: 'xl'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true,
  size: 'xl'
}]

function onSubmit(payload: FormSubmitEvent<{ email: string, password: string, remember: boolean }>) {
  console.log('Submitted', payload)
}
</script>

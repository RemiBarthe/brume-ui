<template>
  <div
    class="bg-primary-100 border-primary-300 text-primary-600 dark:bg-primary-900 dark:border-primary-800 dark:text-primary-300 mb-3 rounded-md border px-4 py-2 text-sm"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type: 'info' | 'error' | 'success';
    dismissible?: boolean;
  }>(),
  {
    type: 'info'
  }
);
</script>

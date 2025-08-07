<script lang="ts" setup>
import { IconSelector } from '@tabler/icons-vue';

const model = defineModel();
defineProps<{
  label: string;
  options: Record<string, string>;
  placeholder?: string;
  showLabel?: boolean;
  required?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <label class="inline-flex flex-col space-y-1">
    <span :class="['text-semibold text-sm', { 'text-gray-500': disabled }, { 'sr-only': !showLabel }]">
      {{ `${label}${required ? '*' : ''}` }}
    </span>

    <div class="relative inline-flex items-center">
      <select class="ui-control w-full appearance-none pr-8" v-model="model" :required :disabled>
        <option v-if="placeholder" :value="undefined" disabled>{{ placeholder }}</option>
        <option v-for="(text, value) in options" :value>{{ text }}</option>
      </select>

      <IconSelector
        :class="['pointer-events-none absolute right-2 size-4', { 'text-gray-500': disabled }]"
        aria-hidden="true"
      />
    </div>
  </label>
</template>

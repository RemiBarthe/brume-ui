<template>
  <div :class="['relative inline-flex items-center', { 'w-full': expanded }, { 'text-gray-500': disabled }]">
    <select
      v-model="model"
      :class="[
        'appearance-none rounded-md px-3 py-2 pr-8 outline-none not-disabled:hover:bg-gray-50 focus:bg-gray-50 focus:ring-3 focus:ring-gray-300 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-gray-500 not-disabled:dark:hover:bg-gray-900 not-disabled:dark:focus:bg-gray-900',
        { 'w-full': expanded }
      ]"
      :aria-label="label"
      :disabled
    >
      <option disabled :value="undefined">{{ label }}</option>
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <IconSelector class="pointer-events-none absolute right-2 size-4" aria-hidden />
  </div>
</template>

<script lang="ts" setup>
import { IconSelector } from '@tabler/icons-vue';

export interface SelectOption {
  value: string;
  text: string;
}

const model = defineModel();

const props = defineProps<{
  label: string;
  options: SelectOption[];
  expanded?: boolean;
  disabled?: boolean;
}>();
</script>

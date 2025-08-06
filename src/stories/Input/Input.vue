<template>
  <label class="inline-flex flex-col space-y-1">
    <span :class="['text-semibold text-sm', { 'text-gray-500': disabled }, { 'sr-only': !showLabel }]">
      {{ `${label}${required ? '*' : ''}` }}
    </span>

    <input class="ui-control" type="text" v-model="model" :placeholder :required :disabled />
  </label>
</template>

<script lang="ts" setup>
const model = defineModel();
const props = defineProps<{
  label: string;
  placeholder?: string;
  showLabel?: boolean;
  required?: boolean;
  disabled?: boolean;
}>();
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { Icon } from '@tabler/icons-vue';
import { IconX } from '@tabler/icons-vue';

const props = withDefaults(
  defineProps<{
    label: string;
    size?: 'base' | 'sm';
    variant?: 'base' | 'primary' | 'red' | 'green';
    icon?: Icon;
    closable?: boolean;
  }>(),
  {
    size: 'base',
    variant: 'base'
  }
);

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const sizeClasses = {
  base: 'text-sm',
  sm: 'text-xs'
};

const variantClasses = {
  base: 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100',
  primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
  red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
};

const classes = computed(() => [
  'inline-flex items-center gap-1 rounded-sm py-1 px-2',
  sizeClasses[props.size],
  variantClasses[props.variant]
]);

const iconSize = computed(() => (props.size === 'sm' ? 'size-3' : 'size-3.5'));
</script>

<template>
  <span :class="classes">
    <component v-if="icon" :is="icon" :class="iconSize" />

    {{ label }}

    <button v-if="closable" @click="emit('close')" class="cursor-pointer">
      <IconX title="Close" :class="iconSize" />
    </button>
  </span>
</template>

<template>
  <button type="button" :class="classes" @click="onClick" :disabled="isDisabled">
    <component v-if="icon" :is="icon" aria-hidden="true" size="1.25em" />
    <span :class="{ 'sr-only': icon && iconOnly }">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { computed, type Component } from 'vue';

const props = withDefaults(
  defineProps<{
    label: string;
    size?: 'base' | 'small';
    variant?: 'primary' | 'red' | 'green' | 'black';
    expanded?: boolean;
    icon?: Component;
    iconOnly?: boolean;
    isDisabled?: boolean;
  }>(),
  {
    size: 'base'
  }
);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => [
  'dark:text-white flex items-center justify-center font-medium cursor-pointer outline-none transition disabled:cursor-not-allowed focus:ring-3',

  // SIZES
  props.size === 'base' && 'gap-2 rounded-lg',
  props.size === 'base' && !props.iconOnly && 'px-3 py-2',
  props.size === 'base' && props.iconOnly && 'p-2',
  props.size === 'small' && 'gap-1.5 text-sm rounded-md',
  props.size === 'small' && !props.iconOnly && 'px-2 py-1.5',
  props.size === 'small' && props.iconOnly && 'p-1.5',

  // VARIANTS
  !props.variant &&
    'dark:hover:not-disabled:bg-gray-900 dark:active:not-disabled:bg-gray-800 disabled:text-gray-600 dark:disabled:text-gray-300 focus:ring-gray-300',
  props.variant === 'primary' &&
    'text-white bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-100 disabled:text-primary-600 dark:disabled:bg-primary-800 dark:disabled:text-primary-300',
  // 'dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 dark:active:bg-gray-800 focus:bg-gray-100 focus:ring-gray-300 active:bg-gray-200':
  //   !props.variant,
  // 'text-white bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-300 active:bg-primary-700 disabled:bg-primary-100 disabled:text-primary-600 dark:disabled:bg-primary-800 dark:disabled:text-primary-300':
  //   props.variant === 'primary',
  // 'text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 focus:ring-green-300 active:bg-green-700 disabled:bg-green-100 disabled:text-green-600 dark:disabled:bg-green-800 dark:disabled:text-green-300':
  //   props.variant === 'green',
  // 'text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-300 active:bg-red-700 disabled:bg-red-100 disabled:text-red-600 dark:disabled:bg-red-800 dark:disabled:text-red-300':
  //   props.variant === 'red',
  props.expanded && 'w-full'
]);

const onClick = () => {
  emit('click', 1);
};
</script>

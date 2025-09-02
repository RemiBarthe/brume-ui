<script setup lang="ts">
interface Props {
  disabled?: boolean;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return;
  emit('click', event);
};
</script>

<template>
  <a
    v-if="href && !disabled"
    :href="href"
    role="menuitem"
    tabindex="0"
    class="flex cursor-pointer items-center rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
    @click="handleClick"
  >
    <slot />
  </a>

  <button
    v-else
    role="menuitem"
    tabindex="0"
    :disabled="disabled"
    class="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
    :class="[
      disabled &&
        'cursor-not-allowed opacity-50 hover:bg-transparent focus:bg-transparent dark:hover:bg-transparent dark:focus:bg-transparent'
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

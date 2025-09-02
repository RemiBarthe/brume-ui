<script setup lang="ts">
import { ref } from 'vue';

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

const focusedByMouse = ref(false);

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return;
  emit('click', event);
};

const handleMouseEnter = (event: MouseEvent) => {
  focusedByMouse.value = true;
  (event.currentTarget as HTMLElement).focus();
};

const handleMouseLeave = (event: MouseEvent) => {
  if (focusedByMouse.value) {
    (event.currentTarget as HTMLElement).blur();
    focusedByMouse.value = false;
  }
};
</script>

<template>
  <a
    v-if="href && !disabled"
    :href="href"
    role="menuitem"
    tabindex="0"
    class="flex cursor-pointer items-center rounded-md px-2 py-1.5 text-sm text-gray-700 focus:bg-gray-50 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </a>

  <button
    v-else
    role="menuitem"
    tabindex="0"
    :disabled="disabled"
    class="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-left text-sm text-gray-700 focus:bg-gray-50 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
    :class="[disabled && 'cursor-not-allowed opacity-50']"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </button>
</template>

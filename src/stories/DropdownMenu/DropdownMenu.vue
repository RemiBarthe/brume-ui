<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const isOpen = ref(false);
const triggerRef = ref<HTMLElement>();
const menuRef = ref<HTMLElement>();
const menuId = `dropdown-menu-${Math.random().toString(36).substring(2, 11)}`;

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
  triggerRef.value?.focus();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
      case 'Enter':
      case ' ':
        event.preventDefault();
        toggle();
        break;
    }
    return;
  }

  switch (event.key) {
    case 'Escape':
      event.preventDefault();
      close();
      break;
    case 'ArrowDown':
      event.preventDefault();
      focusNextItem();
      break;
    case 'ArrowUp':
      event.preventDefault();
      focusPreviousItem();
      break;
    case 'Home':
      event.preventDefault();
      focusFirstItem();
      break;
    case 'End':
      event.preventDefault();
      focusLastItem();
      break;
  }
};

const getFocusableItems = () => {
  if (!menuRef.value) return [];
  return Array.from(
    menuRef.value.querySelectorAll('[role="menuitem"]:not([disabled]), button:not([disabled]), [href]:not([disabled])')
  ) as HTMLElement[];
};

const focusPreviousItem = () => {
  const items = getFocusableItems();
  const currentIndex = items.findIndex((item) => item === document.activeElement);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  items[prevIndex]?.focus();
};

const focusNextItem = () => {
  const items = getFocusableItems();
  const currentIndex = items.findIndex((item) => item === document.activeElement);
  const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  items[nextIndex]?.focus();
};

const focusFirstItem = () => {
  const items = getFocusableItems();
  items[0]?.focus();
};

const focusLastItem = () => {
  const items = getFocusableItems();
  items[items.length - 1]?.focus();
};

onClickOutside(triggerRef, () => {
  close();
});
</script>

<template>
  <div class="relative">
    <div ref="triggerRef" class="w-min" @keydown="handleKeydown">
      <slot
        name="activator"
        :toggle="toggle"
        :isOpen="isOpen"
        :attrs="{
          'aria-haspopup': 'menu',
          'aria-expanded': isOpen,
          'aria-controls': isOpen ? menuId : undefined,
          role: 'button',
          tabindex: '0'
        }"
      />
    </div>

    <div
      v-if="isOpen"
      ref="menuRef"
      :id="menuId"
      role="menu"
      aria-orientation="vertical"
      class="absolute z-50 mt-1 flex min-w-max flex-col rounded-lg border border-gray-300 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900"
      @keydown="handleKeydown"
    >
      <slot />
    </div>
  </div>
</template>

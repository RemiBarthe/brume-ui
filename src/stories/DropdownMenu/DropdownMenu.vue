<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';

const isOpen = ref(false);
const triggerRef = ref<HTMLElement>();
const menuRef = ref<HTMLElement>();
const menuId = `dropdown-menu-${Math.random().toString(36).substr(2, 9)}`;

const toggle = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      const firstFocusable = menuRef.value?.querySelector(
        '[tabindex="0"], button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (firstFocusable instanceof HTMLElement) {
        firstFocusable.focus();
      }
    });
  }
};

const close = () => {
  isOpen.value = false;
  triggerRef.value?.focus();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) return;

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

const focusNextItem = () => {
  const items = getFocusableItems();
  const currentIndex = items.findIndex((item) => item === document.activeElement);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  items[prevIndex]?.focus();
};

const focusPreviousItem = () => {
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

const handleClickOutside = (event: MouseEvent) => {
  if (!triggerRef.value?.contains(event.target as Node) && !menuRef.value?.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div class="relative">
    <div ref="triggerRef">
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
      class="absolute z-50 mt-1 flex flex-col rounded-lg border border-gray-300 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900"
      @keydown="handleKeydown"
    >
      <slot />
    </div>
  </div>
</template>

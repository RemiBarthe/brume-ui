<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, ref, toRef } from 'vue';
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DismissMeta,
  type DropdownDir,
  type DropdownMenuContext
} from './dropdown-context';

function useControllableBoolean(options: {
  model?: () => boolean | undefined;
  defaultValue: boolean;
  onChange?: (next: boolean) => void;
}) {
  const internal = ref<boolean>(options.defaultValue);
  const isControlled = computed(() => options.model?.() !== undefined);
  const current = computed<boolean>({
    get: () => (isControlled.value ? !!options.model?.() : internal.value),
    set: (v: boolean) => {
      if (isControlled.value) {
        options.onChange?.(v);
      } else {
        internal.value = v;
        options.onChange?.(v);
      }
    }
  });
  return { value: current, isControlled };
}

let uid = 0;
const nextId = (prefix: string) => `${prefix}-${++uid}`;

const props = withDefaults(
  defineProps<{
    open?: boolean;
    defaultOpen?: boolean;
    dir?: DropdownDir;
    modal?: boolean;
  }>(),
  { defaultOpen: false, dir: 'ltr', modal: false }
);

const emit = defineEmits<{
  (e: 'update:open', val: boolean): void;
  (e: 'open-change', val: boolean, meta?: DismissMeta): void;
  (e: 'dismiss', meta: DismissMeta): void;
}>();

const { value: isOpen } = useControllableBoolean({
  model: () => props.open,
  defaultValue: props.defaultOpen,
  onChange(next) {
    emit('update:open', next);
    emit('open-change', next);
  }
});

const dir = toRef(props, 'dir');

const triggerId = nextId('dropdown-trigger');
const contentId = nextId('dropdown-content');

let _triggerEl: HTMLElement | null = null;
let _contentEl: HTMLElement | null = null;
const setTriggerEl = (el: HTMLElement | null) => (_triggerEl = el);
const setContentEl = (el: HTMLElement | null) => (_contentEl = el);
const triggerEl = () => _triggerEl;
const contentEl = () => _contentEl;

const openMenu = () => {
  if (!isOpen.value) {
    isOpen.value = true;
    emit('open-change', true);
  }
};
const closeMenu = (meta?: DismissMeta) => {
  if (isOpen.value) {
    isOpen.value = false;
    if (meta) emit('dismiss', meta);
    emit('open-change', false, meta);
  }
};
const toggleMenu = (meta?: DismissMeta) => (isOpen.value ? closeMenu(meta) : openMenu());

function onKeydownGlobal(ev: KeyboardEvent) {
  if (ev.key !== 'Escape' || !isOpen.value) return;
  const c = _contentEl;
  if (!c) return;
  if (c.contains(document.activeElement) || document.activeElement === _triggerEl) {
    closeMenu({ reason: 'escape', event: ev });
    _triggerEl?.focus();
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydownGlobal);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydownGlobal);
});

provide(DROPDOWN_MENU_INJECTION_KEY, {
  open: isOpen,
  dir,
  triggerId,
  contentId,
  setTriggerEl,
  setContentEl,
  triggerEl,
  contentEl,
  openMenu,
  closeMenu,
  toggleMenu,
  requestClose: (meta: DismissMeta) => closeMenu(meta)
} satisfies DropdownMenuContext);
</script>

<template>
  <slot />
</template>

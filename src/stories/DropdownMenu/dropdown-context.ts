import type { Ref } from 'vue';

export type DropdownDir = 'ltr' | 'rtl';

export type DismissReason =
  | 'escape'
  | 'outside:pointer'
  | 'outside:focus'
  | 'outside:interact'
  | 'item-select'
  | 'programmatic';

export type DismissMeta = {
  reason: DismissReason;
  event?: KeyboardEvent | PointerEvent | FocusEvent | Event;
};

export interface DropdownMenuContext {
  open: Ref<boolean>;
  dir: Ref<DropdownDir>;

  triggerId: string;
  contentId: string;

  setTriggerEl: (el: HTMLElement | null) => void;
  setContentEl: (el: HTMLElement | null) => void;
  triggerEl: () => HTMLElement | null;
  contentEl: () => HTMLElement | null;

  openMenu: () => void;
  closeMenu: (meta?: DismissMeta) => void;
  toggleMenu: (meta?: DismissMeta) => void;

  requestClose: (meta: DismissMeta) => void;
}

export const DROPDOWN_MENU_INJECTION_KEY: unique symbol = Symbol('BrumeDropdownMenu');

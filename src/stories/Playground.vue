<template>
  <h1 class="font-display text-4xl">Hello world!</h1>
  <p class="mb-4">To start your journey toward a better life, fill in this form first.</p>

  <div class="flex gap-4">
    <Select v-model="userCountry" label="Choose your country" :options="countries" />
    <Button label="Next" :icon="IconArrowNarrowRight" :disabled="!userCountry" @click="submit()" />
  </div>
</template>

<script lang="ts" setup>
import { IconArrowNarrowRight } from '@tabler/icons-vue';
import { ref } from 'vue';
import Button from './Button/Button.vue';
import Select, { type SelectOption } from './Select/Select.vue';

const countries: SelectOption[] = [
  { value: 'fr', text: 'France' },
  { value: 'uk', text: 'United Kingdom' },
  { value: 'es', text: 'Spain' }
];

const userCountry = ref<string>();

const submit = () => {
  switch (userCountry.value) {
    case 'fr':
      alert('Bienvenue à bord!');
      break;
    case 'uk':
      alert('Welcome on board!');
      break;
    case 'es':
      alert('¡Bienvenid a bordo!');
      break;
    default:
      return;
  }
};
</script>

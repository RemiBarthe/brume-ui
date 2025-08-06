<template>
  <h1 class="font-display text-4xl font-medium">Hello world!</h1>
  <p class="mb-8">To start your journey toward a better life, fill in this form first.</p>

  <div class="flex gap-2 mb-4">
    <Badge label="BrumeUI" variant="primary" />
    <Badge label="Vuetify" variant="red" />
    <Badge variant="green">Shadcn</Badge>
    <Badge label="NuxtUI" />
  </div>

  <form class="flex flex-col gap-4" ref="signUpForm" @submit.prevent="signUp">
    <Alert type="info">Please notice that we won't store any of your personnal data.</Alert>
    <Input v-model="userName" placeholder="e.g. Conan" label="Name" required show-label />
    <Select v-model="userIsland" :options="islands" label="Where are you from?" required show-label />

    <div class="flex justify-end gap-2">
      <Button :icon="IconArrowNarrowLeft" label="Back" disabled />
      <Button type="submit" variant="primary">
        Next
        <IconArrowNarrowRight aria-hidden="true" size="1.25em" />
      </Button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-vue';
import Alert from './Alert/Alert.vue';
import Badge from './Badge/Badge.vue';
import Button from './Button/Button.vue';
import Input from './Input/Input.vue';
import Select from './Select/Select.vue';

const signUpForm = ref<HTMLFormElement | null>(null);

const islands: Record<string, string> = {
  'the-lost-island': 'The Lost Island',
  industria: 'Industria',
  edenia: 'Edennia'
};

const userName = ref('');
const userIsland = ref(Object.keys(islands)[0]);

const signUp = () => {
  if (!userName.value || !userIsland.value) return;
  alert(`Welcome on board ${userName.value} from ${islands[userIsland.value]}!`);
};
</script>

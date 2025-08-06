<template>
  <h1 class="font-display text-4xl font-medium">Hello world!</h1>
  <p class="mb-2">To start your journey toward a better life, fill in this form first.</p>

  <div class="mb-4 flex gap-2">
    <Badge label="BrumeUI" variant="primary" />
    <Badge label="Vuetify" variant="red" />
    <Badge variant="green">Shadcn</Badge>
    <Badge label="NuxtUI" />
  </div>

  <Card class="mb-2">
    <h2 class="mb-2 text-xl font-semibold">Welcome to BrumeUI</h2>
    <p class="opacity-60">
      This is a playground for testing components. You can use the components below to see how they work together. Feel
      free to explore and modify the code to suit your needs. If you have any questions or suggestions, please reach out
      to us. We hope you enjoy using BrumeUI! Happy coding!
    </p>
  </Card>

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
import Card from './Card/Card.vue';
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

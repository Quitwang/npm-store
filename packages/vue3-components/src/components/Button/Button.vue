<template>
  <button
    class="company-button"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  type?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const buttonClasses = computed(() => [
  `company-button--${props.type}`,
  { 'company-button--disabled': props.disabled }
]);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style src="./styles.css" scoped></style>
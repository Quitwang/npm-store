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

<script>
export default {
  name: 'CompanyButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return [
        `company-button--${this.type}`,
        { 'company-button--disabled': this.disabled }
      ];
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
};
</script>

<style src="./styles.css" scoped></style>
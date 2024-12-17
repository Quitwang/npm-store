<template>
  <button
    class="company-button"
    :class="[`company-button--${type}`, { 'company-button--disabled': disabled }]"
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
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style scoped>
.company-button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.company-button--primary {
  background-color: #1890ff;
  color: white;
  border: none;
}

.company-button--secondary {
  background-color: white;
  color: #1890ff;
  border: 1px solid #1890ff;
}

.company-button--danger {
  background-color: #ff4d4f;
  color: white;
  border: none;
}

.company-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
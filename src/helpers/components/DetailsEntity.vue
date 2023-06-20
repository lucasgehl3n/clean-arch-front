<template>
    <slot></slot>
    <DisplayError :errorMessage="errorMessage"></DisplayError>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<script setup>
import { ref } from 'vue';
import DisplayError from '../../helpers/components/DisplayError.vue';

let errorMessage = ref("");
</script>
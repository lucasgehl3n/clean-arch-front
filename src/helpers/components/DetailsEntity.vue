<template>
    <slot></slot>
    <DisplayError :errorMessage="errorMessage"></DisplayError>
</template>

<script setup>
import { ref } from 'vue';
import DisplayError from '../../helpers/components/DisplayError.vue';

let errorMessage = ref("");
</script>
<template>
    <transition name="fade">
        <div class="fixed bottom-10 inset-x-0 flex justify-center" v-if="errorMessage">
            <Toast :type="'danger'" closable class="bg-red-500 text-white">
                {{ errorMessage }}
            </Toast>
        </div>
    </transition>
</template>

<script setup>
import { Toast } from 'flowbite-vue';

defineProps({
    errorMessage: {
    type: String,
    required: true,
  },
})

</script>
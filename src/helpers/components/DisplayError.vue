<template>
    <transition name="fade">
        <div class="fixed bottom-10 inset-x-0 flex justify-center p-10" v-if="errorMessage">
            <Toast :type="'danger'" class="bg-red-500 text-white">
                {{ errorMessage }}
            </Toast>
        </div>
    </transition>
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
import { Toast } from 'flowbite-vue';

defineProps({
    errorMessage: {
        type: String,
        required: true,
    },
})

</script>
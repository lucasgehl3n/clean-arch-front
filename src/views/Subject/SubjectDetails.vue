<template>
    <DetailsEntity :errorMessage="errorMessage">
        <div class="pt-3">
            <Input size="md" placeholder="Nome" v-model="entity.name" />
        </div>

        <DisplayError :errorMessage="errorMessage"></DisplayError>

        <div class="pt-3">
            <Button v-on:click="submitForm()">Salvar</Button>
        </div>
    </DetailsEntity>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Input, Button } from 'flowbite-vue'
import axios from 'axios';
import Constants from '../../../constants';
import { useRoute } from 'vue-router';
import router from '../../router';
import DetailsEntity from '../../helpers/components/DetailsEntity.vue';
import subjectService from '../../helpers/services/subjectService';
import DisplayError from '../../helpers/components/DisplayError.vue';
const routeCurrent = useRoute();
let entity = ref({});
let errorMessage = ref("");
const entityType = "subject";
async function submitForm() {
    const { data } = await axios.post(`${Constants.URL_ADRESS}/${entityType}`, entity.value);
    if (data.success) {
        router.push(`/${entityType}`);
    }
    else {
        errorMessage.value = data.message;
        setTimeout(() => {
            errorMessage.value = "";
        }, 5000)
    }
}

async function getEntity() {
    if (routeCurrent.params.id) {
        const { data } = await subjectService.getSubject(routeCurrent.params.id);
        console.log(data)
        entity.value = data.result;
    }
}

onMounted(() => {
    getEntity();
});
</script>
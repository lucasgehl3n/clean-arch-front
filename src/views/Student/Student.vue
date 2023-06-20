<template>
    <Table class="sm:table-auto">
        <table-head>
            <table-head-cell>Nome</table-head-cell>
        </table-head>
        <table-body>
            <table-row v-for="item in entity" :key="item.id" v-on:click="redirectToEntityDetail(item)">
                <table-cell class="text-left">{{ item.name }}</table-cell>
            </table-row>
        </table-body>
    </Table>
    <div class="pt-3">
        <Button v-on:click="createEntity()">Novo</Button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Button } from 'flowbite-vue'
import axios from 'axios';
import Constants from '../../../constants';
import router from '../../router/';

let entity = ref([]);

async function getListEntity() {
    const response = await axios.get(`${Constants.URL_ADRESS}/student`);
    entity.value = response.data.result;
}

function redirectToEntityDetail(entity) {
    router.push({ name: `DetalhesEstudante`, params: { id: entity.id } });
}

function createEntity() {
    router.push({ name: `NovoEstudante` });
}

onMounted(() => {
    getListEntity();
});
</script>
<template>
    <Table :class="'sm:table-auto'">
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
import routeManager from '../../router/routeManager';
let entity = ref([]);

async function getListEntity() {
    const { data } = await routeManager.getListEntity('subject');
    entity.value = data.result;
}

function redirectToEntityDetail(entity) {
    routeManager.redirectToEntityDetail('DetalhesDisciplina', entity);
}

function createEntity() {
    routeManager.createEntity('NovaDisciplina');
}

onMounted(() => {
    getListEntity();
});
</script>
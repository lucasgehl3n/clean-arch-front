<template>
    <DetailsEntity :errorMessage="errorMessage">
        <div class="pt-3">
            <Input size="md" placeholder="Nome" v-model="entity.name" />
        </div>

        <div class="pt-3">
            <Input size="md" placeholder="Descrição" v-model="entity.description" />
        </div>

        <div class="pt-10">
            <span class="h4"> Disciplinas Vinculadas</span>
            <Table :class="'sm:table-auto pt-3'">
                <table-head>
                    <table-head-cell>Nome</table-head-cell>
                    <table-head-cell></table-head-cell>
                </table-head>
                <table-body v-if="subjects && subjects.length">
                    <table-row v-for="item in subjects" :key="item.id">
                        <table-cell>{{ item.subject.name }}</table-cell>
                        <table-cell>
                            <TrashIcon class="h-6 text-red-800 cursor-pointer"
                                v-on:click="removeSubject(item.idCourseSubject)">
                            </TrashIcon>
                        </table-cell>
                    </table-row>
                </table-body>

            </Table>
        </div>

        <div class="pt-10">
            Outras disciplinas
            <div class="pt-3 flex">
                <Select v-model="selectedSubjectToAdd" :options="subjectsSelectOptions"
                    :placeholder="'Clique para adicionar uma'" />

                <div class="pl-10">
                    <Button v-on:click="addSubject()" :disabled="!selectedSubjectToAdd">
                        <CheckIcon class="h-6 text-white"></CheckIcon>
                    </Button>
                </div>

            </div>
        </div>

        <div class="pt-10">
            <Button v-on:click="submitForm()">Salvar</Button>
        </div>
    </DetailsEntity>


    <DisplayError :errorMessage="errorMessage"></DisplayError>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Input, Button, Select, Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from 'flowbite-vue'
import { TrashIcon, CheckIcon } from '@heroicons/vue/24/solid'
import axios from 'axios';
import Constants from '../../../constants';
import { useRoute } from 'vue-router';
import router from '../../router';
import DetailsEntity from '../../helpers/components/DetailsEntity.vue';
import subjectService from '../../helpers/services/subjectService';
import DisplayError from '../../helpers/components/DisplayError.vue';
import { Toast } from 'flowbite-vue';
const routeCurrent = useRoute();
let entity = ref({});
let subjects = ref([]);
let errorMessage = ref("");
let subjectsSelectOptions = ref("");
let selectedSubjectToAdd = ref("");
const entityType = "course";

async function submitForm() {
    const { data } = await axios.post(`${Constants.URL_ADRESS}/${entityType}`, entity.value);
    if (data.success) {
        router.push(`/${entityType}`);
    }
    else {
        setErrorMessage(data.message);
    }
}

function setErrorMessage(message) {
    errorMessage.value = message;
    setTimeout(() => {
        errorMessage.value = "";
    }, 5000)
}

async function removeSubject(id) {
    const { data } = await axios.delete(`${Constants.URL_ADRESS}/courseSubject/${id}`);
    if (data.success) {
        await getSubjectsCourse();
    }
    else {
        setErrorMessage(data.message);
    }
}

async function addSubject() {
    const { data } = await axios.post(`${Constants.URL_ADRESS}/courseSubject/`, {
        course_id: routeCurrent.params.id,
        subject_id: selectedSubjectToAdd.value,
    });

    if (data.success) {
        await getSubjectsCourse();
        selectedSubjectToAdd.value = null;
    }
    else {
        setErrorMessage(data.message);
    }
}


async function getEntity() {
    if (routeCurrent.params.id) {
        const response = await axios.get(`${Constants.URL_ADRESS}/${entityType}/${routeCurrent.params.id}`);
        entity.value = response.data.result.entity;
        await getSubjectsCourse();
    }
}

async function getSubjectsCourse() {
    if (routeCurrent.params.id) {
        const response = await axios.get(
            `${Constants.URL_ADRESS}/GetSubjectsCourse/${routeCurrent.params.id}`
        );
        subjects.value = response.data.result.subjects;
        await setSubjectsSelect();
    }
}

async function setSubjectsSelect() {
    const subjectsList = await subjectService.getSubjects();
    if (subjectsList.data.result) {
        const subjectsAvailable = subjectsList.data.result
            .filter((x) => !subjects.value.some((y) =>
                y.subject.id == x.id
            ));

        subjectsSelectOptions.value = subjectService.mapSubjectsSelect(subjectsAvailable);
    }
    else {
        setErrorMessage(subjectsList.data.message);
    }
}

onMounted(() => {
    getEntity();
});
</script>
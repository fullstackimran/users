<template>
    <div class="container m-auto">
        <h1 class="my-10 text-3xl capitalize">Upload file</h1>
        <hr>
        <div class="mt-5">
            <div v-if="msg" class="text-green-500">{{ msg }}</div>
            <div v-if="err" class="text-red-500">{{ err }}</div>
        </div>
        <form @submit.prevent="submitform">
            <div class="my-5">
                <input type="file" class="border rounded-lg" @change="onChangeSetFile">
            </div>
            <div class="my-5">

                <button type="submit" class="bg-blue-500 px-5 py-2 text-white rounded-lg">Upload</button>
            </div>
            <div v-if="form.progress" class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 transition-all ease-in duration-200" :style="form.progress ? 'width: ' + form.progress.percentage + '%' : 'width: 0%'"></div>
                <span class="text-sm text-gray-500">uploading file ...</span> <span class="text-sm text-green-500">{{ form.progress?.percentage }}%</span>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    msg: String,
    err: String
})

const form = useForm({
    myfile: null
})

function onChangeSetFile(e) {
    form.myfile = e.target.files[0];
}

function submitform() {
    console.log('submit');
    form.post('/file');
}
</script>

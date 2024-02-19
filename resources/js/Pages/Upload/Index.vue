<template>
    <div class="container m-auto">
        <form @submit.prevent="submitform">
            <h1 class="my-10 text-3xl">Upload File</h1>
            <hr>
            <!-- <input type="file" @input="form.myfile = $event.target.files[0]" /> -->
            <input type="file" @change="setOnChange" />

            <div v-if="form.progress" class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-10">
                <div class="bg-blue-600 h-2.5 rounded-full" :style="form.progress ? 'width:' + Math.floor(form.progress.percentage) + '%' : 'width: 0px'"></div>
            </div>

            <div class="my-10"></div>


            <button type="submit" class="bg-blue-500 px-5 py-2">Upload file</button>
        </form>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    myfile: null
});

function submitform() {
    console.log('submitting')
    form.post('/upload');
}

function setOnChange(e) {
    console.log(e.target.files[0]);
    form.myfile = e.target.files[0];
}

</script>

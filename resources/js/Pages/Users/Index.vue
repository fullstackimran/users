<script setup>
import UsersLinks from "@/Pages/Users/Links.vue"
import { Link, useForm } from "@inertiajs/vue3";
import { onMounted, onUpdated, ref } from "vue";

import { initFlowbite, Modal } from "flowbite";


const props = defineProps({
    users: Object,
    msg: String
})

const form = useForm({
    id: 0
})

function deleteUser() {
    form.delete('/users/' + form.id);
}
let deleteModal = null;
let deletedModal = null;

onMounted(() => {
    initFlowbite()
    deleteModal = new Modal(document.getElementById('popup-modal'));
    deletedModal = new Modal(document.getElementById('popup-modal-deleted'));
});

function showDeleteModal(userid) {
    form.id = userid;
    deleteModal.show();
}
function hideDeleteModal() {
    deleteModal.hide();
}

function showDeletedModal(userid) {
    deletedModal.show();
}
function hideDeletedModal(userid) {
    deletedModal.hide();
}

onUpdated(() => {
    console.log(props.msg);
    if (props.msg === "Deleted") {
        hideDeleteModal();
        showDeletedModal();
    }

});

</script>
<template>
    <UsersLinks></UsersLinks>
    <div class="text-center mt-5 mb-20">
        <h1 class="text-3xl">Users List</h1>

        <div class="relative overflow-x-auto container md:container m-auto mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edit
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in props.users.data" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4 w-10">
                            {{ user.id }}
                        </td>
                        <td class="px-6 py-4">
                            {{ user.name }}

                        </td>
                        <td class="px-6 py-4">
                            {{ user.email }}

                        </td>
                        <td class="px-6 py-4 w-16">
                            <Link :href="route('users.edit', user.id)"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            edit</Link>
                        </td>
                        <td class="px-6 py-4 w-16">
                            <button @click="showDeleteModal(user.id)"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center">Delete</button>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <div class="mt-10">
                <div class="mb-5 ">
                    Displaying Page {{ $props.users.current_page }} of {{ Math.ceil($props.users.total / $props.users.per_page) }}
                </div>
                <Link v-for="link in $page.props.users.links" :key="link" :href="link.url ? link.url : ''"
                    :class="['px-3 mx-1 py-2 rounded-lg ', link.label === '...' ? 'text-black' : 'text-white', link.active ? 'bg-red-500' : link.label === '...' ? 'bg-blue-200' : 'bg-blue-500', link.url == null && link.label !== '...' ? 'hidden opacity-90 cursor-default bg-blue-400' : '']">
                <span v-html="link.label"></span>
                </Link>
            </div>
        </div>

        <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this user?</h3>

                        <button type="button" @click="deleteUser"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Yes, I'm sure
                        </button>
                        <button @click="hideDeleteModal" type="button"
                            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No,
                            cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="popup-modal-deleted" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal-deleted">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>


                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">

                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 50px; height: 50px; fill:green;" class="m-auto mb-5  rounded-full p-2 border-green-500 border-4"
                            viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">User is deleted successfullt</h3>


                        <button @click="hideDeletedModal" type="button"
                            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            OK</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

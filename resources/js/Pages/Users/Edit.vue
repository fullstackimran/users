<script setup>
import UsersLinks from "@/Pages/Users/Links.vue"
import { Link, useForm } from "@inertiajs/vue3"
import { onMounted } from "vue";


const form = useForm({
    name: '',
    email: '',
    password: ''
});

function submitForm() {
    form.put(`/users/${props.user.id}`);
}

const props = defineProps({
    user: Object,
    msg: String
})

onMounted(() => {
    // console.log(props.msg)
    form.name = props.user.name;
    form.email = props.user.email;

})

</script>
<template>
    <form @submit.prevent="submitForm" class="max-w-sm mx-auto">
        <UsersLinks></UsersLinks>

        <div class="flex items-center justify-center my-5 relative ">
            <Link href="/users" class="mr-5 absolute left-[40px]  px-3 py-1 flex text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 10px; fill: blue;" class="mr-1"
                viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <span>
                Users
            </span>

            </Link>
            <h1 class="text-3xl text-center inline-block ">Edit User</h1>
        </div>
        <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="name" v-model="form.name" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name" required />
            <div class="error">
                {{ $page.props.errors.name }}
            </div>
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" v-model="form.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com" required />
            <div class="error">
                {{ $page.props.errors.email }}
            </div>
            <div class="error">
                {{ msg }}
            </div>
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" v-model="form.password" placeholder="leave blank if you don't want to change"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                autocomplete="" />
            <div class="error">
                {{ $page.props.errors.password }}
            </div>

        </div>

        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update User
        </button>
    </form>
</template>
<style scoped>
.error {
    color: red;
}
</style>

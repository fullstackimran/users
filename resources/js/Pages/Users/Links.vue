<script setup>
import { Link } from '@inertiajs/vue3';

</script>
<template>
    <div class="flex mt-5  align-middle justify-center">
        <Link href="/users" :class="['text-blue-500 border px-5 py-2 rounded-lg hover:text-red-500  bg-gray-100 mx-1 ', route().current('users.index') ? 'border-b-red-500' : '']">Users</Link>
        <Link href="/users/create" :class="['text-blue-500 border px-5 py-2 rounded-lg hover:text-red-500 bg-gray-100 mx-1', route().current() === 'users.create' ? 'border-b-red-500' : '']">Create User</Link>
    </div>
</template>

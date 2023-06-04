<template>
    <h1>logout page</h1>
</template>

<script>
import {useRouter} from 'vue-router';
import { useLogout } from "@/composables/useLogout";

export default {
    setup () {
        const {error, logout} = useLogout();
        const router = useRouter();

        async function onLogout() {
            await logout();
            if (!error.value) router.push({ name: 'login', params: {}})
        }
        onLogout();

        return {error}
    }
}
</script>
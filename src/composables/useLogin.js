import {
    ref
} from 'vue';
import {
    projectAuth
} from "@/config/firebase";

const error = ref(null);
const isPending = ref(false);

async function login(email, password) {
    isPending.value = true;
    error.value = null;
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password);
        return response;
    } catch (err) {
        console.log(err);
        error.value = err.message
    } finally {
        isPending.value = false;
    }
}

export function useLogin() {
    return {
        error,
        isPending,
        login
    }
}
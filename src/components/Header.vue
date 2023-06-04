<template>
    <div class="wrapper">
        <section class="info">
            <div class="img"></div>
            <!-- <h1 class="name">Hey, {{ user.displayName }}</h1> -->
        </section>
        <section class="icon">
            <i class="t2ico t2ico-setting"></i>
        </section>
    </div>
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
    setup () {
        const {getUser} = useUser();
        const {user} = getUser();
        return {
            user
        }
    }
}
</script>

<style scoped>
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 20px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        background-color: var(--white-color);
        z-index: 10;
    }

    .info {
        display: flex;
        align-items: center;
    }

    .img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-image: url('@/assets/images/thumbnail.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        flex-shrink: 0;
        margin-right: 12px;
    }

    .name {
        font-size: 1.8rem;
        font-weight: 600;
    }

    .icon > i {
        font-size: 2rem;
    }
</style>
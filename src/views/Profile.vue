<template>
    <div class="wrapper">
        <!-- Infor -->
        <div v-if="user" class="info">
            <div class="image"></div>
            <h1 class="name">{{ user.displayName }}</h1>
            <p class="email">{{ user.email }}</p>
        </div>
        <!-- Menu -->
        <div class="menu">
            <h2 class="menu-text">General</h2>
            <ul class="menu-list">
                <RouterLink :to="item.route" v-for="item in dataOfProfile" :key="item.name" >
                    <li class="menu-item">
                        <section class="left">
                            <i class="t2ico menu-item-icon" :class="[item.icon, {'text-red': item.textRed}]"></i>
                            <h3 :class="{'text-red': item.textRed}" class="menu-item-name">{{ item.name }}</h3>
                        </section>
                        <section class="right">
                            <i class="t2ico t2ico-arrow-right"></i>
                        </section>
                    </li>
                </RouterLink>
            </ul>
        </div>
    </div>
</template>

<script>
import { data as dataOfProfile } from "@/data/menuProfile";
import {useUser} from '@/composables/useUser';
export default {
    setup () {
        const {getUser} = useUser();
        const {user} = getUser();
        return {
            dataOfProfile,
            user
        }
    }
}
</script>

<style scoped>
.wrapper {
    margin-top: var(--content-margin-top);
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image {
    width: 85px;
    height: 85px;
    background-image: url('@/assets/images/thumbnail.webp');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    flex-shrink: 0;
    border-radius: 50%;
}

.name {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-top: 12px;
}

.email {
    font-size: 1.4rem;
    color: var(--text-muted);
}

.menu {
    padding: 0px 30px;
    margin-top: 30px;
}

.menu-text {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 12px;
}

.menu-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0px;
}

.left {
    display: flex;
}

.menu-item-name {
    font-size: 1.4rem;
}

.menu-item-icon {
    font-size: 1.8rem;
    margin-right: 8px;
}

.text-red {
    color: rgb(255, 90, 90);
}

</style>
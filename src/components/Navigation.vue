<template>
    <div class="wrapper">
        <div class="icon-plus">
           <router-link to="/transaction">
               <i class="t2ico t2ico-plus"></i>
           </router-link>
        </div>
        <ul class="menu-list">
            <RouterLink v-for="item in dataOfNav" :key="item.name" :to="item.route">
                <li class="menu-item">
                    <i class="t2ico menu-item-icon" :class="item.icon"></i>
                </li>
            </RouterLink>
        </ul>
    </div>
</template>

<script>
import {data as dataOfNav} from '@/data/menuDefault';

export default {
    setup () {
        return {
            dataOfNav
        }
    }
}
</script>

<style scoped>
    .wrapper {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px 0px;
        background-color: rgb(235, 235, 235);
        z-index: 10;
    }

    .menu-list {
        list-style: none;
        padding-left: unset;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .menu-list > a:nth-child(2) {
        margin-right: 10%;
    }

    .menu-list > a:nth-child(3) {
        margin-left: 10%;
    }
    .menu-item-icon {
        font-size: 2rem;
    }

    .icon-plus {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: blue;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white-color);
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 0;
    }

    .icon-plus > i {
        font-size: 2rem;
    }
</style>

<template>
    <Header />
    <slot></slot>
    <Navigation />
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
export default {
    components: {
        Header,
        Navigation,
    }
}
</script>
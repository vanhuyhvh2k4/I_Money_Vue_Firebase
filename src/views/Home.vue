<template>
  <div class="wrapper">
    <h1>home page</h1>
    <div v-if="user">{{ user.displayName }}</div>
  </div>
</template>

<script>
import {useUser} from '@/composables/useUser';

export default {
  setup () {
    const {getUser} = useUser();
    const {user} = getUser();

    return {user};
  }
}
</script>

<style scoped>
  .wrapper {
    margin-top: var(--content-margin-top);
  }
</style>

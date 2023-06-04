<template>
  <div class="wrapper">
    <div class="logo"></div>
    <h1 class="title">Best way to saving your money</h1>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  .logo {
    margin: auto;
    width: 100px;
    height: 100px;
    text-align: center;
    background-image: url('@/assets/images/iMoney_Logo.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  .title {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
  }
</style>
<template>
  <div class="navbar">
    <h2 class="navbar__title" @click="$router.push('/')">Vue 3</h2>
    <div class="navbar__buttons">
      <button class="navbar__button" @click="$router.push('/posts')">Посты</button>
      <button class="navbar__button" @click="$router.push('/about')">О нас</button>
      <button class="navbar__button" @click="$router.push('/store')">store</button>
      <button class="navbar__button" @click="$router.push('/composition')">composition</button>
    </div>
  </div>
</template>

<script>
export default {


}
</script>

<style scoped>
.navbar {
  height: 50px;
  padding: 0 15px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}

.navbar__title {
  color: teal;
  font-size: 24px;
  line-height: 1;
  font-weight: 600;
  cursor: pointer;
}

.navbar__buttons {
  margin-left: 30px;
}

.navbar__button {
  background-color: lightgray;
  padding: 4px 8px;
  margin-right: 10px;
  border-radius: 4px;
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: teal;
  border: 1px solid teal;

}
</style>
<style>
.hero.is-lightblue {
  background-color: #d2eeea;
  color: rgba(0, 0 ,0, .7 )
}
</style>
<template>
  <div class="hero is-fullheight is-lightblue" id="app">
    <div class="hero body" style="margin-bottom: 25px;">
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import '@mdi/font/css/materialdesignicons.css';
export default {
  name: "App",
  components: {
    NavBar,
}
};
</script>

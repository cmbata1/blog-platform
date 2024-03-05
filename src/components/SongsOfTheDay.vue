<template>
    <div>
        <section class="hero is-light">
            <div class="hero-body" style="padding: 5% 0% 0% 20%;">
              <p class="title">Songs of the Day</p>
            </div>
        </section>
    </div>
</template>
  
  <script>
  import Vue from 'vue'
  import Buefy from 'buefy';
  import 'buefy/dist/buefy.css';

  Vue.use(Buefy)
  export default {
    name: "SongsOfTheDay",
  };
  </script>
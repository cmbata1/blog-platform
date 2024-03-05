<template>
    <div>
        <section class="hero is-light">
            <div class="hero-body" style="align-content: center; margin: auto;">
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
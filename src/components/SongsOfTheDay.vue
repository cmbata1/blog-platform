<template>
    <div>
        <section class="hero" is-light>
            <div class="hero-body" style="align-content: center; margin: auto;">
                <p class="title">Songs of the Day</p>
                <iframe width="1045" height="622" src="https://www.youtube.com/embed/_iTcSs6sRok" title="Chill Kill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
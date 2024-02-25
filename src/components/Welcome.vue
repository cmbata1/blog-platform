<template>
    <div>
        <section class="hero" style="color: #8158a3;">
            <div class="hero-body">
                <div class="box" style="text-align: center; margin: auto;">
                    <p class="title is-4">Welcome to Cat's Chronicles!</p>
                    <p class="subtitle">An amalgamation of my thoughts</p>
                </div>
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
    name: "Welcome"
  };
  </script>
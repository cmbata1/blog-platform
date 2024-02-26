<template>
    <div>
        <section class="hero is-light">
            <div class="hero-body">
                <div class="box" style="align-content: center; margin: auto;">
                    <p class="title is-3" style="font-family: 'Brush Script MT', cursive;">Welcome</p>
                    <p class="subtitle">An amalgamation of my thoughts</p>
                    <figure class="image is-square">
                        <img src="flower">
                    </figure>
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
    name: "Welcome",
    data(){
        return{
            flower: require('../assets/Cherry-Blossom.jpg')
        }
    }
  };
  </script>
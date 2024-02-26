<template>
    <div>
        <section class="hero" style="background-color: #b8b1c4;">
            <div class="hero-body" style="align-content: center; margin: auto;">
                <div class="box is-shadowless" style="text-align: center;">
                    <p class="title is-1" style="font-family: 'Brush Script MT', cursive;">Welcome</p>
                    <p class="subtitle">an amalgamation of my thoughts</p>
                </div>
                <br>
                <figure class="image is-square">
                    <img :src="imageUrl">
                </figure>
            </div>
        </section>
    </div>
</template>
  
  <script>
  import Vue from 'vue'
  import Buefy from 'buefy';
  import 'buefy/dist/buefy.css';

  const imageUrl = require('./../assets/Cherry-Blossom.png');

  Vue.use(Buefy)
  export default {
    name: "Welcome",
    data(){
        return{
            imageUrl: imageUrl
        }
    }
  };
  </script>
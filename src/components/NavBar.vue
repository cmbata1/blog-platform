<template>
    <b-navbar centered spaced>
        <template #start>
            <b-navbar-item href="/about">
                About
            </b-navbar-item>
            <h3 class="title is-3 is-vcentered has-text-black" tag="router-link" :to="{ path: '/' }" 
            style="font-family: 'Brush Script MT', cursive; padding: 50px 25px 25px 25px;">
                Cat's Chronicles
            </h3>
            <b-navbar-item href="/about">
                Blogs
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
  
  <script>
  import Vue from 'vue'
  import Buefy from 'buefy';
  import 'buefy/dist/buefy.css';

  Vue.use(Buefy)
  export default {
    name: "NavBar"
  };
  </script>
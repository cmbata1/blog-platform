<template>
    <b-navbar spaced>
        <template #start>
            <a class="title is-3 is-vcentered has-text-black" href="/" 
            style="font-family: 'Brush Script MT', cursive;">
                Cat's Chronicles
            </a>
        </template>
        <template #end>
            <b-navbar-item tag="router-link" :to="{name: 'home'}">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{name: 'about'}">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{name: 'blogs'}">
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
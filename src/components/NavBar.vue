<template>
    <b-navbar centered>
        <template #start>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            <h1 tag="router-link" :to="{ path: '/' }" style="font-family: Monaco, fantasy; vertical-align: bottom;">
                Chronicles
            </h1>
            <b-navbar-item href="#">
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
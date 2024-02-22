<template>
    <b-navbar centered>
        <template #start>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <h2 style="font-family: Monaco, fantasy;">
                    Chronicles
                </h2>
            </b-navbar-item>
            <b-navbar-item href="#">
                Blogs
            </b-navbar-item>
        </template>
    </b-navbar>
    <hr>
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
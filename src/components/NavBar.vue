<template>
    <b-navbar centered>
        <template #start>
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
            <b-navbar-item href="#">
                Blogs
            </b-navbar-item>
            <hr>
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
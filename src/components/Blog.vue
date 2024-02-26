<template>
    <div>
        <section class="hero" style="background-color: #538152;">
            <div class="hero-body" style="align-content: center; margin: auto;">
                <div class="container" style="text-align: center;">
                    <p class="title is-1" style="font-family: 'Brush Script MT', cursive;" v-text="blog.Title"/>
                    <p class="subtitle is-3" v-text="blog.date"/>
                </div>
            </div>
        </section>
        <b-loading :is-full-page="false" :active="isLoading" :can-cancel="false"></b-loading>
        <div class="columns is-multiline" v-if="!isLoading && blog">
            <div class="column is-one-quarter"></div>
            <div class="column">
                <p class="subtitle is-5" style="color: #000;" v-text="blog.Content"/>
            </div>
            <div class="column is-one-quarter"></div>
        </div>
    </div>
</template>
  
  <script>
  import Vue from 'vue'
  import Buefy from 'buefy';
  import 'buefy/dist/buefy.css';

  Vue.use(Buefy)
  export default {
    name: "Blog",
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data (){
        return {
            blog: null,
            isLoading: true,
        }
    },
    async created(){
        const endpoint = `/data-api/rest/Blog/Id`;
        const response = await fetch(`${endpoint}/${this.id}`);
        const blog = await response.json();
        this.blog = blog.value[0];
        this.isLoading = false;
    }
  };
  </script>
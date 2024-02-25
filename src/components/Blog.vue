<template>
    <div>
        <b-loading :is-full-page="false" :active="isLoading" :can-cancel="false"></b-loading>
        <div class="columns is-multiline" v-if="!isLoading && blog">
            <div class="column is-one-fifth"></div>
            <div class="column is-three-fifths">
                <p class="title" v-text="blog.Title"/>
                <p class="subtitle is-3" v-text="blog.date"/>
                <p class="subtitle is-4" v-text="blog.Content"/>
            </div>
            <div class="column is-one-fifth"></div>
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
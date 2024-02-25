<template>
    <div>
        <b-loading :is-full-page="false" :active="isLoading" :can-cancel="false"></b-loading>
        <div class="columns is-multiline" v-if="!isLoading && blogs.length">
            <div class="column is-one-fifth"></div>
                <div class="column is-one-fifth" v-for="blog in blogs" :key=blog.id>
                    <BlogCard 
                    :blog-title="blog.Title"
                    :date="blog.date"
                    :blog-preview="blog.Preview"
                    />           
                </div>
            <div class="column is-one-fifth"></div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import BlogCard from './BlogCard';
import fetch from 'node-fetch'

Vue.use(Buefy)
export default {
    name: "BlogPreviewList",
    components: {
        BlogCard
    },
    data (){
        return {
            blogs: null,
            isLoading: true
        }
    },
    async created(){
        const endpoint = '/data-api/rest/Blog';
        const response = await fetch(endpoint);
        const blogs = await response.json();
        this.blogs = blogs.value.slice(-3);
        this.isLoading = false;
    }
};
</script>

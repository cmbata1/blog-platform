<template>
    <h3 class="title is-3 is-vcentered has-text-black">Most Recent Posts</h3>
    <div class="columns is-multiline">
        <div class="column is-one-fifth"></div>
        <div class="column is-one-fifth" v-for="blog in blogs" :key=blog>
            <BlogCard 
            :blogTitle="blog.Title"
            :date="blog.date"
            :blogPreview="blog.Preview"
            />           
        </div>
        <div class="column is-one-fifth"></div>
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
            blogs: null
        }
    },
    async created(){
        const endpoint = '/data-api/rest/Blog';
        const response = await fetch(endpoint);
        const blogs = await response.json();
        this.blogs = blogs.value.slice(-3);
    }
};
</script>

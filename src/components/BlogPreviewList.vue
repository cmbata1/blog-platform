<template>
    <div class="columns is-multiline">
        <div class="column is-one-quarter is-offset-one-quarter" v-for="blog in blogs" :key=blog>
            <BlogCard 
            :blogTitle="blog.Title"
            :date="blog.date"
            :blogPreview="blog.Preview"
            />           
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
            blogs: null
        }
    },
    async created(){
        const endpoint = '/data-api/rest/Blog';
        const response = await fetch(endpoint);
        console.log(response);
        const blogs = await response.json();
        this.blogs = blogs.value;
        console.log(this.blogs)
    }
};
</script>

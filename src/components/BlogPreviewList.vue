<template>
    <div class="columns is-centered">
        <div class="column is-one-quarter">
            <div v-for="blog in blogs" :key=blog>
                <BlogCard 
                blogTitle={{blog.Title}}
                date={{blog.date}}
                blogPreview={{blog.Preview}}
                />           
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import BlogCard from './BlogCard';
import fetch from 'node-fetch'
import reactive from 'vue'

Vue.use(Buefy)
export default {
    name: "BlogPreviewList",
    components: {
        BlogCard
    },
    data (){
        return {
            blogs: reactive(null)
        }
    },
    async created(){
        const endpoint = '/data-api/rest/Blog';
        const response = await fetch(endpoint);
        console.log(response);
        const blogs = await response.json();
        console.log(this.blogs)
    }
};
</script>

<template>
    <div class="columns is-centered">
        <div class="column is-one-third">
            <BlogCard 
            blogTitle="February 23rd 2023"
            blogContent="A new challenge: a blog. Combining my thoughts with a new technical challenge"
            />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import BlogCard from './BlogCard';

Vue.use(Buefy)
export default {
    name: "BlogPreviewList",
    components: {
        BlogCard
    }
};
</script>

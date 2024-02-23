<template>
    <div>
        <BlogCard v-for="(blog, index) in blogs"></BlogCard>
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import BlogCard from './BlogCard';
import getBlobList from './services/storage.service';

Vue.use(Buefy)
export default {
    name: "BlogPreviewList",
    components: {
        BlogCard
    },
    data() {
        return {
            blogTitle: [],
            blogContent: []
        };
    },
    created(){
        this.blogTitle, this.blogContent = getBlobList();
    }
};
</script>

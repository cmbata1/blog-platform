<template>
    <div>
        <BlogCard 
          v-for="(blogTitle, index) in blogTitles" :key="blogTitle"
          :blogTitle="blogTitle"
          :blogContent="blogContents[index]"
          />
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import BlogCard from './BlogCard';
import BlobService from '../services/storage.service.js';

Vue.use(Buefy)
export default {
    name: "BlogPreviewList",
    components: {
        BlogCard
    },
    data() {
        return {
            blogTitles: [],
            blogContents: []
        };
    },
    created(){
        this.blogTitles, this.blogContents = BlobService.getBlobList();
    }
};
</script>

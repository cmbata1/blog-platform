<template>
    <div>
        <b-loading :is-full-page="false" :active="isLoading" :can-cancel="false"></b-loading>
        <p class="title" style="padding: 5% 0% 0% 20%;">
            Latest Blogs
            <b-button tag="router-link" :to="{name: 'blogs'}" style="margin-left: 1%;" 
                type="is-primary"
                icon-right="arrow-right">
                View All Blogs
            </b-button>
        </p>
        <div class="columns is-multiline is-vcentered" style="padding: 0% 20% 10%;" v-if="!isLoading && blogs.length">
                <div class="column is-one-third" v-for="blog in blogs" :key=blog.Id>
                    <BlogCard 
                    :blogTitle="blog.Title"
                    :date="blog.date"
                    :blogPreview="blog.Preview"
                    :id="blog.Id"
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
        const endpoint = '/data-api/rest/Blog?$orderby=Id desc';
        const response = await fetch(endpoint);
        const blogs = await response.json();
        this.blogs = blogs.value.slice(0, 6);

        var monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

        this.blogs.forEach(blog => {
            const dummyDate = new Date(blog.date.replace(/-/g, '/'));
            blog.date = "" + monthNames[dummyDate.getMonth()] + " " + dummyDate.getDate() + ", " + dummyDate.getFullYear();                
            });

        this.isLoading = false;
    
    }
};
</script>

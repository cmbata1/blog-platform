<template>
    <div>
        <Blog
        :id="id" />
    </div>

</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Blog from "@/components/Blog.vue";

Vue.use(Buefy)
export default {
    name: "FullBlog",
    components: {
        Blog
    },
    props: {
        id: {
            type: Number,
            required: true,
        }

    }
};
</script>

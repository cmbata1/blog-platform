<template>
    <div class="card">
        <div class="card-content">
        <p class="title" v-text="blogTitle" />
        <p class="subtitle" v-text="blogContent"/>
        </div>
        <footer class="card-footer">
        <p class="card-footer-item">
            <span>
            <a href="#" class="icon"><i class="fas fa-arrow-right"></i></a>
            </span>
        </p>
        </footer>
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy)
export default {
    name: "BlogCard",
    props: {
        blogTitle:{
            type: String, required: true
        },
        blogContent:{
            type: String, required: true
        }
    }
};
</script>

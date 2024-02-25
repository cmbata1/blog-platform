<template>
    <div class="card">
        <div class="card-content">
        <p class="title" v-text="blogTitle" />
        <p class="subtitle is-5" v-text="date"/>
        <p class="subtitle is-6" v-text="blogPreview"/>
        </div>
        <footer class="card-footer">
        <p class="card-footer-item">
            <span>
            <a style="align-content: end;" href="#">View Post</a>
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
        blogPreview:{
            type: String, required: true
        },
        date:{
            type: Date, required: true
        }
    }
};
</script>

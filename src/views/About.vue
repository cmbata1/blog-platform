<template>
    <div>
        <section class="hero" style="background-color: #86b9ca;">
            <div class="hero-body" style="align-content: center; margin: auto;">
                <div class="container" style="text-align: center;">
                    <p class="title is-1" style="font-family: 'Brush Script MT', cursive;">About</p>
                </div>
            </div>
        </section>
        <div class="title is-4" style="padding: 3% 25% 0%;">The Truth...</div>
        <div class="subtitle is-5" style="padding: 3% 25% 3%;">Describing myself is something that I've always found to be difficult to do. I ponder words that I might use to describe myself, but always, my mind ends up blank. So, I'm using a different approach: a blog where I can express my feelings on any given day.</div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';


Vue.use(Buefy)
export default {
    name: "About",
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    created(){
        document.title = "About";
    }
};
</script>
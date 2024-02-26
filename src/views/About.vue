<template>
    <div>
        <section class="hero" style="background-color: #86b9ca;">
            <div class="hero-body" style="align-content: center; margin: auto;">
                <div class="container" style="text-align: center;">
                    <p class="title is-1" style="font-family: 'Brush Script MT', cursive;">About</p>
                </div>
            </div>
        </section>
        <div class="subtitle is-5" style="padding: 0% 20% 0%;">Describing myself is something that I've always found to be difficult to do. Honestly, I don't really know who I am. So, I'm using a different approach: here are some pictures that represent what I might be thinking about at any given moment of the day.</div>
    </div>
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
    }
};
</script>
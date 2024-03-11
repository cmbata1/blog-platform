<template>
    <div>
        <title>About</title>
        <section class="hero" style="background-color: #86b9ca;">
            <div class="hero-body" style="align-content: center; margin: auto;">
                <div class="container" style="text-align: center;">
                    <p class="title is-1" style="font-family: 'Brush Script MT', cursive;">About</p>
                </div>
            </div>
        </section>
        <div class="title is-4" style="padding: 3% 25% 0%;">The Truth...</div>
        <div class="subtitle is-5" style="padding: 3% 25% 3%;">Describing myself is something that I've always found to be difficult to do. Honestly, I don't really know who I am. I ponder words that I might use to describe myself, but always, my mind ends up blank. So, I'm using a different approach: here are some pictures that represent what I might be thinking about at any given moment of the day.</div>
        <div class="tile is-ancestor" style="padding: 0% 25% 0%;">
            <div class="tile is-vertical is-8">
                <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-primary">
                    <p class="title">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                    </article>
                    <article class="tile is-child notification is-warning">
                    <p class="title">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                    <p class="title">Middle tile</p>
                    <p class="subtitle">With an image</p>
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/640x480.png">
                    </figure>
                    </article>
                </div>
                </div>
                <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                    <!-- Content -->
                    </div>
                </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                <div class="content">
                    <p class="title">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                    <!-- Content -->
                    </div>
                </div>
                </article>
            </div>
            </div>
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
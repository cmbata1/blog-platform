<template>
    <div>
        <head>
            <title>Cat's Chronicles</title>
        </head>
        <Welcome />
        <BlogPreviewList />
        <SongsOfTheDay />
    </div>

</template>

<script>
import BlogPreviewList from "@/components/BlogPreviewList.vue";
import Welcome from "@/components/Welcome.vue";
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import SongsOfTheDay from "@/components/SongsOfTheDay.vue";

Vue.use(Buefy);
export default {
  name: "Home",
  components: {
    BlogPreviewList,
    Welcome,
    SongsOfTheDay
}
};

</script>
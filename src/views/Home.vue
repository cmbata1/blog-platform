<template>
    <div>
        <Welcome />
        <BlogPreviewList />
    </div>

</template>

<script>
import BlogPreviewList from "@/components/BlogPreviewList.vue";
import Welcome from "@/components/Welcome.vue";
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
export default {
  name: "Home",
  components: {
    BlogPreviewList,
    Welcome
}
};

</script>
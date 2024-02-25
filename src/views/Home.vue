<template>
    <div>
        <BlogPreviewList />
    </div>

</template>

<script>
import BlogPreviewList from "@/components/BlogPreviewList.vue";
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
export default {
  name: "Home",
  components: {
    BlogPreviewList,
}
};

</script>
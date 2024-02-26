<template>
    <div>
        <BlogList />
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import BlogList from './../components/BlogList.vue'

Vue.use(Buefy)
export default {
  name: "Blogs",
  components: {
    BlogList,
}
};
</script>
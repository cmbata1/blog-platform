<template>
    <div>
        <h3 class="title is-3 is-vcentered has-text-black">Most Recent Posts</h3>
        <BlogPreviewList />
    </div>

</template>

<script>
import BlogPreviewList from "@/components/BlogPreviewList.vue";
export default {
  name: "Home",
  components: {
    BlogPreviewList,
}
};

</script>
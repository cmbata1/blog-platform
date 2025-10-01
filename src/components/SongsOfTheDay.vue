<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body" style="padding: 5% 0% 0% 20%;">
        <p class="title">Songs of the Day</p>
      </div>
    </section>

    <section class="section" style="padding-top: 2rem;">
      <div class="container" style="max-width: 860px;">
        <div class="box" style="overflow:hidden; border-radius:0.5rem;">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/xlyrt5eAtKI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
  name: "SongsOfTheDay",
}
</script>

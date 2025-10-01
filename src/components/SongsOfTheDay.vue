<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body" style="padding: 5% 0% 0% 20%;">
        <p class="title">Songs of the Day</p>
      </div>
    </section>

    <section class="section" style="padding-top: 2rem;">
      <div class="container" style="max-width: 1000px;">
        <!-- Song 1 -->
        <b-card header="Song #1" class="mb-5">
          <div class="video is-16by9" v-if="embedUrl(videos[0].url)">
            <iframe
              :src="embedUrl(videos[0].url)"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p v-if="videos[0].note" class="mt-3">{{ videos[0].note }}</p>
        </b-card>

        <!-- Song 2 -->
        <b-card header="Song #2">
          <div class="video is-16by9" v-if="embedUrl(videos[1].url)">
            <iframe
              :src="embedUrl(videos[1].url)"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p v-if="videos[1].note" class="mt-3">{{ videos[1].note }}</p>
        </b-card>
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
  name: 'SongsOfTheDay',
  data () {
    return {
      videos: [
        { url: "https://www.youtube.com/watch?v=xlyrt5eAtKI", note: "Why I picked this one… it has a very fun beat" },
        { url: "https://www.youtube.com/watch?v=1ekZEVeXwek", note: "In my opinion, this is Ariana Grande's best song" }
      ]
    }
  },
  methods: {
    embedUrl (raw) {
      if (!raw) return ''
      try {
        const u = new URL(raw)
        const host = u.hostname.replace(/^www\./, '')
        if (host === 'youtu.be') return `https://www.youtube.com/embed/${u.pathname.slice(1)}`
        if (host.endsWith('youtube.com')) {
          const v = u.searchParams.get('v')
          if (v) return `https://www.youtube.com/embed/${v}`
          if (u.pathname.startsWith('/shorts/')) {
            return `https://www.youtube.com/embed/${u.pathname.split('/')[2] || ''}`
          }
        }
      } catch (e) {
        return ''
      }
      return ''
    }
  }
}
</script>

<style scoped>
.mt-3 { margin-top: 0.75rem; }
</style>

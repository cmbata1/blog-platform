<template>
  <div class="sotd-page">
    <section class="hero is-light is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container sotd-container">
          <p class="title has-text-centered">Songs of the Day</p>

          <b-card :header="videos[0].title" class="mb-5">
            <div class="video is-16by9">
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

          <b-card :header="videos[1].title">
            <div class="video is-16by9">
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
        {
          url: 'https://www.youtube.com/watch?v=xlyrt5eAtKI',
          note: "Why I picked this one… it has a very fun beat",
          title: "Red Velvet – Chill Kill MV"
        },
        {
          url: 'https://www.youtube.com/watch?v=IdneKLhsWOQ',
          note: "A dreamy track — one of Taylor’s best re-recordings",
          title: "Taylor Swift – Wildest Dreams (Taylor’s Version)"
        }
      ]
    }
  },
  methods: {
    embedUrl (raw) {
      if (!raw) return ''
      try {
        const u = new URL(raw)
        const host = u.hostname.replace(/^www\./, '')
        if (host === 'youtu.be') {
          const id = u.pathname.slice(1)
          return id ? `https://www.youtube-nocookie.com/embed/${id}` : ''
        }
        if (host.endsWith('youtube.com')) {
          const v = u.searchParams.get('v')
          if (v) return `https://www.youtube-nocookie.com/embed/${v}`
          if (u.pathname.startsWith('/shorts/')) {
            const id = u.pathname.split('/')[2] || ''
            return id ? `https://www.youtube-nocookie.com/embed/${id}` : ''
          }
        }
      } catch (e) {}
      return ''
    }
  }
}
</script>

<style scoped>
.sotd-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.sotd-container {
  max-width: 1100px;
  margin: 0 auto;
}

.mt-3 { margin-top: 0.75rem; }

.b-card {
  border-radius: 10px;
}
</style>

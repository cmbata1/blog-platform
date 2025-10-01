<template>
  <div class="sotd-page">
    <section class="sotd-section">
      <div class="sotd-container">
        <h1 class="title sotd-title">Songs of the Day</h1>

        <div class="sotd-single">
          <b-card :header="video.title" class="sotd-card">
            <div class="sotd-frame">
              <iframe
                :src="embedUrl(video.url)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p v-if="video.note" class="mt-3">{{ video.note }}</p>
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
      video: {
        url: 'https://www.youtube.com/watch?v=xlyrt5eAtKI',
        note: 'Why I picked this one... it has a very fun beat',
        title: 'Red Velvet – Chill Kill MV'
      }
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
          return id ? 'https://www.youtube-nocookie.com/embed/' + id : ''
        }
        if (host.endsWith('youtube.com')) {
          const v = u.searchParams.get('v')
          if (v) return 'https://www.youtube-nocookie.com/embed/' + v
          if (u.pathname.startsWith('/shorts/')) {
            const id = u.pathname.split('/')[2] || ''
            return id ? 'https://www.youtube-nocookie.com/embed/' + id : ''
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
.sotd-page {
  min-height: 100vh;
  background-color: #d6f5f2;
  display: flex;
  flex-direction: column;
}

/* tighter like your homepage section */
.sotd-section {
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
}

/* match the “Latest Blogs” left alignment:
   use 20% viewport padding-left and remove max-width so edges line up */
.sotd-container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding-left: 20%;
  padding-right: 2rem;
}

.sotd-title {
  margin-bottom: 1rem;
  text-align: left;
}

/* single card area */
.sotd-single {
  max-width: 760px; /* keeps a nice readable width; tweak if you want bigger */
}

/* responsive 16:9 frame */
.sotd-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
}
.sotd-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.sotd-card {
  border-radius: 10px;
}

.mt-3 { margin-top: 0.75rem; }
</style>

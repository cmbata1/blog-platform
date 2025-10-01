<template>
  <div class="sotd-page">
    <section class="sotd-section">
      <div class="sotd-container">
        <h1 class="title has-text-centered sotd-title">Songs of the Day</h1>

        <div class="sotd-grid">
          <b-card :header="videos[0].title" class="sotd-card">
            <div class="sotd-frame">
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

          <b-card :header="videos[1].title" class="sotd-card">
            <div class="sotd-frame">
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
          note: 'Why I picked this one... it has a very fun beat',
          title: 'Red Velvet – Chill Kill MV'
        },
        {
          url: 'https://youtu.be/vtW_4j7SsZk?si=KQEnZd7kze_iIL3H',
          note: 'A dreamy track — one of Taylor\'s best re-recordings',
          title: 'Taylor Swift – Wildest Dreams (Taylor\'s Version)'
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
/* full-page background */
.sotd-page {
  min-height: 100vh;
  background-color: #d6f5f2; /* match your homepage teal */
  display: flex;
  flex-direction: column;
}

/* much tighter top padding to match your second screenshot */
.sotd-section {
  padding-top: 0.75rem;
  padding-bottom: 2.5rem;
}

/* wider content and centered */
.sotd-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* heading spacing trimmed */
.sotd-title {
  margin-bottom: 1rem;
}

/* two-up grid on desktop, stacks on narrow screens */
.sotd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 1.75rem;
  align-items: start;
}

/* card polish */
.sotd-card {
  height: 100%;
  border-radius: 10px;
}

/* responsive 16:9 without relying on Bulma's .video helper */
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

.mt-3 { margin-top: 0.75rem; }

/* if you want an even tighter top, drop to 0.5rem */
@media (min-width: 1280px) {
  .sotd-section { padding-top: 0.75rem; }
}
</style>

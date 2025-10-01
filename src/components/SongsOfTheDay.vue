<template>
  <div class="sotd-page">
    <section class="sotd-section">
      <div class="sotd-container">
        <h1 class="title sotd-title">Songs of the Day</h1>

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
          url: 'https://youtu.be/xaPNR-_Cfn0',
          note: 'Chappell Roan energy 🚀 Hot to Go',
          title: 'Chappell Roan – Hot to Go'
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
.sotd-page {
  min-height: 100vh;
  background-color: #d6f5f2;
  display: flex;
  flex-direction: column;
}

.sotd-section {
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
}

.sotd-container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20%;
  padding-right: 2rem;
}

.sotd-title {
  margin-bottom: 1rem;
  text-align: left;
}

.sotd-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

@media (min-width: 1024px) {
  .sotd-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.sotd-card {
  height: 100%;
  border-radius: 10px;
}

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
</style>
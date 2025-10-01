<template>
  <div class="sotd-page">
    <section class="section sotd-section">
      <div class="container sotd-container">
        <h1 class="title has-text-centered">Songs of the Day</h1>

        <div class="columns is-multiline is-variable is-6 is-centered">
          <div class="column is-12-mobile is-6-tablet is-5-desktop">
            <b-card :header="videos[0].title" class="sotd-card">
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
          </div>

          <div class="column is-12-mobile is-6-tablet is-5-desktop">
            <b-card :header="videos[1].title" class="sotd-card">
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

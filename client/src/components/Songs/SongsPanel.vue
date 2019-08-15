<template>
  <panel data-cy="panel-title" title="Songs">
    <v-btn
      slot="action"
      :to="{
        name: 'songs-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div
      v-for="song in songs"
      class="song"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
          <div data-cy="song-title" class="song-title">
            {{song.title}}
          </div>
          <div data-cy="song-artist" class="song-artist">
            {{song.artist}}
          </div>
          <div data-cy="song-genre" class="song-genre">
            {{song.genre}}
          </div>

          <v-btn
            dark
            data-cy="view-button"
            class="cyan"
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img data-cy="album-image"  class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

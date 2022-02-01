<template>
  <div class="container">
    <h1 class="title">Custom Video Player</h1>
    <video
      id="video"
      src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
      poster="./poster.png"
      @click="togglerPlayer"
    />
    <div class="controls">
      <button id="play" class="btn" @click="togglerPlayer">
        <Icon class="play" :icon="isPlaying ? 'fa:pause' : 'fa-play'" />
      </button>
      <button id="stop" class="btn" @click="stopPlayer">
        <Icon class="stop" icon="fa:stop" />
      </button>
      <input
        id="progress"
        type="range"
        min="0"
        max="100"
        step="0.1"
        :value="progress"
        @input="(e) => seek(e)"
      />
      <h3 class="timestamp">{{ timestamp }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'

const isPlaying = ref(false)
const progress = ref(0)
const timestamp = ref('00:00')
let videoRef: HTMLVideoElement

onMounted(() => {
  videoRef = document.getElementById('video') as HTMLVideoElement
  videoRef.addEventListener('timeupdate', () => {
    progress.value = (videoRef.currentTime / videoRef.duration) * 100
    let minutes = Math.floor(videoRef.currentTime / 60).toString()
    minutes = (minutes.length < 2 ? '0' : '') + minutes

    let seconds = Math.floor(videoRef.currentTime % 60).toString()
    seconds = (seconds.length < 2 ? '0' : '') + seconds
    timestamp.value = `${minutes}:${seconds}`
    if (videoRef.ended) {
      isPlaying.value = false
    }
  })
})
function togglerPlayer() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    videoRef.play()
  } else {
    videoRef.pause()
  }
}
function stopPlayer() {
  isPlaying.value = false
  progress.value = 0
}
function seek(e: Event) {
  const val = e.target?.value
  videoRef.currentTime = (val * videoRef.duration) / 100
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.container {
  height: 100vh;
  width: 95vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}
#video {
  width: 100%;
  height: 40rem;
  margin: 0 auto;
  cursor: pointer;
  background-color: black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.controls {
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: rgb(58, 55, 55);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.btn {
  margin-right: 0.5rem;
  font-size: 1rem;
  background-color: transparent;
  border-color: transparent;
  color: white;
  cursor: pointer;
}
#progress {
  flex: 1;
  width: 100%;
  margin: 0 1rem;
  cursor: pointer;
}

@media (min-width: 800px) {
  .container {
    width: 80vw;
  }
}
@media (min-width: 1000px) {
  .container {
    width: 60vw;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 50vw;
  }
}
</style>

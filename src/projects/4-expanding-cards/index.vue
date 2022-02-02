<script setup>
const images = [
  'https://images.unsplash.com/photo-1643557763588-da65ca5e33a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  'https://images.unsplash.com/photo-1643479530443-3fb61e53d8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  'https://images.unsplash.com/photo-1591944200520-a73846478e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
  'https://images.unsplash.com/photo-1550408484-ddd546cf4f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  'https://images.unsplash.com/photo-1643469840960-13b76cd2ab74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
]

function toggleCard(e) {
  document.querySelectorAll('.card-item').forEach((card) => {
    card.classList.remove('active')
  })
  e.target.classList.add('active')
}
</script>
<template>
  <div class="container">
    <div
      v-for="(c, i) in images"
      :class="`card-item ${i === 0 ? 'active' : ''}`"
      :key="i"
      :style="{ backgroundImage: `url(${c})` }"
      @click="toggleCard"
    >
      <h3 class="card-title">Card {{ i }}</h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.card-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 1rem;
  min-width: 4rem;
  cursor: pointer;
  transition: flex 0.7s ease-in;
}

.card-item.active {
  flex: 5;
}
.card-item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0;
  position: absolute;
  left: 20px;
  bottom: 10px;
}
.card-item.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.3s;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100vw;
  }
}
</style>

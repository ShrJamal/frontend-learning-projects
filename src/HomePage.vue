<script setup>
import { projects } from './projects'
</script>
<template>
  <div class="container">
    <h1>Learn Frontend by projects</h1>
    <div class="projects">
      <div v-for="p in projects" :key="p.name">
        <div class="project-item">
          <router-link :to="p.path">
            <h1>{{ p.name.toUpperCase() }}</h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects {
  width: calc(100% - 50px);
  margin: 2rem 0;
  padding: 2rem;
  border: gray solid 1px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.project-item {
  margin: 1rem;
  padding: 1rem;
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  text-align: center;
}
</style>

<template>
  <!-- Header section -->
  <header id="header">
    <Navbar />
    <Banner />
  </header>

  <!-- About US section -->
  <About />
  <!-- Store section -->
  <Store />
  <!-- Services Section -->
  <Services />
  <!-- Order Section -->
  <Order />
  <!-- Footer -->
  <Footer />
</template>

<script setup>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './sections/Navbar.vue'
import Banner from './sections/Banner.vue'
import Store from './sections/Store.vue'
import Order from './sections/Order.vue'
import Footer from './sections/Footer.vue'
import Services from './sections/Services.vue'
import About from './sections/About.vue'
</script>

<style>
@import 'bootstrap-icons/font/bootstrap-icons';
:root {
  --mainPink: #ef7998;
  --mainYellow: rgb(249, 228, 148);
  --mainWhite: #fff;
  --mainBlack: #000;
  --yellowTrans: rgba(249, 228, 148, 0.5);
  --mainGrey: rgb(238, 238, 238);
}
</style>

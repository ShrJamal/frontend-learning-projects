<template>
  <footer id="footer" class="container-fuild">
    <div class="row">
      <div class="py-5 col-sm-6 bg-black text-center">
        <h2 class="banner-title">Grandma's</h2>
        <div class="py-4 d-flex justify-content-evenly">
          <a class="footer-icon" href="#">
            <i class="bi bi-facebook"></i>
          </a>
          <a class="footer-icon" href="#">
            <i class="bi bi-twitter"></i>
          </a>

          <a class="footer-icon" href="#">
            <i class="bi bi-instagram"> </i>
          </a>

          <a class="footer-icon" href="#">
            <i class="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      <div class="contact py-5 col-sm-6 text-center mx-auto">
        <h2 class="h1 pb-2">Contact</h2>
        <div class="contact-info ps-4">
          <div class="contact-item d-flex">
            <i class="pt-1 pe-4 bi bi-map-fill"></i>
            <p class="">123 Main Street, San Diego, CA 90101</p>
          </div>
          <div class="contact-item d-flex">
            <i class="pt-1 pe-4 bi bi-telephone-fill"></i>
            <p class="">123-456-789</p>
          </div>
          <div class="contact-item d-flex">
            <i class="pt-1 pe-4 bi bi-envelope-fill"></i>
            <p class="">email@example.com</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-icon {
  font-size: 2rem;
  color: var(--mainWhite);
}

.contact {
  background-color: var(--mainGrey);
}
</style>

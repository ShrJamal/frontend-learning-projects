<template>
  <section id="order" class="container-fluid text-center mt-5">
    <h1 class="order-title mb-5">
      Order <strong class="banner-title">Cake</strong>
    </h1>
    <div class="row justify-content-around">
      <div class="col-10 col-sm-4 mb-5">
        <h3 class="order-cake_name py-4">Birthday Cake</h3>
        <p class="order-cake_prop">Birthday Cake With Name</p>
        <p class="order-cake_prop">Custom Ingredients</p>
        <p class="order-cake_prop">Custom Size</p>
        <p class="order-cake_prop">Custom Design</p>
        <div class="order-now btn btn-outline-primary">Order Now</div>
        <p class="order-cake_prop">Starting at 5$</p>
        <img src="../img/trans-cake.png" alt="" />
      </div>

      <div class="col-10 col-sm-4 mb-5">
        <h3 class="order-cake_name py-4">Custom Cake</h3>
        <p class="order-cake_prop">Birthday Cake With Name</p>
        <p class="order-cake_prop">Custom Ingredients</p>
        <p class="order-cake_prop">Custom Size</p>
        <p class="order-cake_prop">Custom Design</p>
        <div class="order-now btn btn-outline-primary">Order Now</div>
        <p class="order-cake_prop">Starting at 10$</p>
        <img src="../img/trans-custom.png" alt="" />
      </div>
      <div class="col-10 col-sm-4 mb-5">
        <h3 class="order-cake_name py-4">Wedding Cake</h3>
        <p class="order-cake_prop">Birthday Cake With Name</p>
        <p class="order-cake_prop">Custom Ingredients</p>
        <p class="order-cake_prop">Custom Size</p>
        <p class="order-cake_prop">Custom Design</p>
        <div class="order-now btn btn-outline-primary">Order Now</div>
        <p class="order-cake_prop">Starting at 15$</p>
        <img src="../img/trans-wedding.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.order-cake_prop {
  color: gray;
}

.order-now {
  color: var(--mainPink);
  border-color: var(--mainPink);
  margin-bottom: 1rem;
}

.order-now:hover {
  color: var(--mainWhite);
  background-color: var(--mainPink);
  border-color: var(--mainPink);
}
</style>

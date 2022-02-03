<template>
  <nav class="navbar navbar-expand-lg px-4">
    <a href="#" class="navbar-brand">
      <img src="../img/logo.svg" alt="Logo" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#myNavbar"
      aria-conrols="myNavbar"
      aria-expand="false"
      aria-label="Toggle navigation"
    >
      <i class="toggler-icon bi bi-list"></i>
    </button>

    <div id="myNavbar" class="collapse navbar-collapse">
      <ul class="navbar-nav text-capitalize mx-auto">
        <li class="nav-item active">
          <a href="#header" class="nav-link">home</a>
        </li>
        <li class="nav-item active">
          <a href="#about" class="nav-link">about</a>
        </li>
        <li class="nav-item active">
          <a href="#store" class="nav-link">store</a>
        </li>
        <li class="nav-item active">
          <a href="#services" class="nav-link">services</a>
        </li>
        <li class="nav-item active">
          <a href="#order" class="nav-link">order</a>
        </li>
      </ul>
      <div class="nav-info-item d-none d-lg-flex">
        <!-- Phone number info -->
        <div class="nav-info align-items-center d-flex mx-5">
          <i class="me-3 bi bi-telephone-fill" />
          <p class="mb-0">+ 123 456 789</p>
        </div>

        <!-- Shopping cart info -->
        <div id="cart-info" class="nav-info d-flex align-items-center mx-5">
          <i class="cart-info__icon bi me-3 bi-cart-fill" />
          <p class="mb-0 text-capitalize">
            <span id="cart-count">2</span>
            items - $
            <span id="cart-total">10.49</span>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-toggler {
  outline: none !important;
  color: var(--mainPink);
  font-size: 2.5rem;
}
.nav-link {
  color: var(--mainPink);
  font-size: 1.5rem;
  transition: all 1s ease-in-out !important;
}
.nav-link:hover {
  color: var(--mainBlack);
}

#cart-info {
  border: 0.1rem solid var(--mainBlack);
  color: var(--mainBlack);
  border-radius: 0.25rem;
  padding: 0.4rem 0.5rem;
  cursor: pointer;
}
#cart-info:hover {
  border-color: var(--mainPink);
  background: var(--mainPink);
  color: var(--mainWhite);
}
</style>

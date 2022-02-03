<template>
  <section id="store" class="pb-5">
    <div class="container-fluid col">
      <h1 class="store-title mx-auto">
        Our <strong class="banner-title">Store</strong>
      </h1>
      <div class="d-flex flex-wrap justify-content-center">
        <div class="btn btn-outline-dark m-2">ALL</div>
        <div class="btn btn-outline-dark m-2">CAKES</div>
        <div class="btn btn-outline-dark m-2">CUPCAKES</div>
        <div class="btn btn-outline-dark m-2">SWEETS</div>
        <div class="btn btn-outline-dark m-2">DOUGHNUTS</div>
      </div>

      <!-- Seach Box -->
      <form class="input-group mx-auto" style="max-width: 25rem">
        <div class="input-group-text store-search__icon">
          <i class="bi bi-search"></i>
        </div>
        <input
          type="text"
          name="search"
          id="store-search"
          class="form-control"
          placeholder="item...."
        />
      </form>

      <!-- Store items -->
      <div
        id="store-items"
        class="row justify-content-sm-start justify-content-center"
      >
        <div
          class="store-item sweets mt-4 col-10 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
          data-item="sweets"
        >
          <div class="card store-item_container">
            <div class="store-img_container">
              <img class="card-img-top store-img" src="../img/sweets-1.jpeg" />
              <span class="store-item-icon">
                <i class="bi bi-cart-fill"></i>
              </span>
            </div>
            <div class="card-body d-flex justify-content-between">
              <h5 class="store-item-name">Sweet Item</h5>
              <h5 class="store-item-price">5$</h5>
            </div>
          </div>
        </div>

        <div
          class="store-item cakes mt-4 col-10 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
          data-item="cakes"
        >
          <div class="card store-item_container">
            <div class="store-img_container">
              <img class="card-img-top store-img" src="../img/cake-1.jpeg" />
              <span class="store-item-icon">
                <i class="bi bi-cart-fill"></i>
              </span>
            </div>
            <div class="card-body d-flex justify-content-between">
              <h5 class="store-item-name">Cake Item</h5>
              <h5 class="store-item-price">5$</h5>
            </div>
          </div>
        </div>

        <div
          class="store-item doughnuts mt-4 col-10 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
          data-item="doughnuts"
        >
          <div class="card store-item_container">
            <div class="store-img_container">
              <img
                class="card-img-top store-img"
                src="../img/doughnut-1.jpeg"
              />
              <span class="store-item-icon">
                <i class="bi bi-cart-fill"></i>
              </span>
            </div>
            <div class="card-body d-flex justify-content-between">
              <h5 class="store-item-name">Doughnut Item</h5>
              <h5 class="store-item-price">5$</h5>
            </div>
          </div>
        </div>

        <div
          class="store-item cupcakes mt-4 col-10 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
          data-item="cupcakes"
        >
          <div class="card store-item_container">
            <div class="store-img_container">
              <img class="card-img-top store-img" src="../img/cupcake-1.jpeg" />
              <span class="store-item-icon">
                <i class="bi bi-cart-fill"></i>
              </span>
            </div>
            <div class="card-body d-flex justify-content-between">
              <h5 class="store-item-name">Cupcake Item</h5>
              <h5 class="store-item-price">5$</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#store {
  background-color: var(--mainGrey);
  text-align: center;
}

.store-search__icon {
  background-color: var(--mainPink);
}

.store-item_container {
  transition: all 0.3s linear;
}
.store-item_container:hover {
  box-shadow: 0 10px 15px black;
}

.store-img_container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.store-img {
  transition: all 0.3s ease-in-out;
}
.store-img_container:hover .store-img {
  transform: scale(1.2);
}
.store-item-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.75rem;
  background-color: var(--mainYellow);
  border-top-left-radius: 1rem;
  transition: all 0.3s ease-in-out;
  transform: translate(100%, 100%);
}
.store-item-icon:hover {
  color: var(--mainWhite);
}
.store-img_container:hover .store-item-icon {
  transform: translate(0, 0);
}
</style>

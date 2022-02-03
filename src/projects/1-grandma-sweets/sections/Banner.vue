<template>
  <div class="container-fluid">
    <div class="row max-height align-items-center">
      <div class="col-10 mx-auto banner text-center">
        <h1 class="text-capitalize">
          Welcome to <strong class="banner-title">Grandma's</strong>
        </h1>
        <a href="#store" class="btn banner-link my-2">EXPLORE</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-height {
  min-height: calc(100vh - 76px);
  background: linear-gradient(var(--yellowTrans), var(--yellowTrans)),
    url('../img/headerBcg.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}

.banner {
  color: var(--mainWhite);
  margin-top: -4rem;
}
.banner-title {
  color: var(--mainPink);
  font-size: 4rem;
}
.banner-link {
  color: var(--mainBlack);
  font-size: 1.5rem;
  border: 0.2rem solid var(--mainBlack);
}
.banner-link:hover {
  color: var(--mainPink);
  background-color: var(--mainBlack);
}
</style>

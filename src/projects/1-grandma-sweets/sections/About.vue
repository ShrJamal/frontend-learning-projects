<template>
  <section id="about" class="about py-5 container">
    <div class="row">
      <div class="col-10 col-md-6 mb-5 mx-auto justify-items-center">
        <h2 class="mb-4 about-title">
          About <strong class="about-us">Us</strong>
        </h2>
        <p class="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          necessitatibus sed nihil alias temporibus expedita eligendi, molestias
          repudiandae impedit saepe cumque sint mollitia dolorem tempore
          repellat? Ea voluptates blanditiis numquam minus dignissimos quia
          iusto tenetur.
        </p>
        <a href="#about" class="btn btn-outline-secondary">EXPLORE</a>
      </div>
      <div class="about-img col-10 col-md-6 mx-auto">
        <div class="about-img__container">
          <img
            class="img-fluid"
            src="../img/sweets-1.jpeg"
            alt="About us image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-title {
  font-size: 2rem;
}
.about-us {
  color: var(--mainPink);
  font-size: 3rem;
}
.about-text {
  color: gray;
}
.about-explore {
  border: 0.15rem solid var(--mainBlack);
}
.about-img__container {
  position: relative;
}
.about-img__container::before {
  content: '';
  position: absolute;
  top: -1.5rem;
  left: -1.2rem;
  width: 100%;
  height: 100%;
  outline: 0.5rem solid var(--mainYellow);
  z-index: -1;
  transition: all 0.2s ease-in-out;
}

.about-img__container:hover:before {
  top: 0;
  left: 0;
}
</style>

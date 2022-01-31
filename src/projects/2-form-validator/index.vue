<template>
  <div class="container">
    <form id="form" class="form">
      <h2 class="heading">Register With Us</h2>
      <div class="form-control">
        <label for="name">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
        />
        <small>Error Message</small>
      </div>
      <div class="form-control">
        <label for="name">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" />
        <small>Error Message</small>
      </div>
      <div class="form-control">
        <label for="name">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        <small>Error Message</small>
      </div>
      <div class="form-control">
        <label for="name">Confirm Passowrd</label>
        <input
          type="password"
          id="cPassword"
          name="cPassword"
          placeholder="Confirm Passowrd"
        />
        <small>Error Message</small>
      </div>
      <button class="submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');

* {
  box-sizing: border-box;
}
.container {
  font-family: 'Open Sans', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.heading {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

#form {
  width: 25rem;
  padding: 2rem 3rem;
  box-shadow: 2px;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.1);
}
.form-control {
  width: 100%;
  display: flex;
  flex-direction: column;
  & label {
    font-size: 1rem;
    font-weight: bold;
  }

  & input {
    padding: 0.5rem;
    height: 2.5rem;
    background-color: transparent;
    border: 0.15px solid gray;
    border-radius: 0.25rem;
    color: white;
    &:focus {
      outline: none;
      border-color: white;
    }
    &.success {
      border-color: greenyellow;
    }
    &.error {
      border-color: red;
    }
  }

  & small {
    margin-top: 2px;
    visibility: hidden;
    color: rgb(241, 71, 71);
    font-weight: bold;
    &.error {
      visibility: visible;
    }
  }
}
.submit {
  width: 100%;
  margin-top: 6px;
  padding: 0.8rem;
  background-color: #3498db;
  border: 0;
  font-size: 1.2rem;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const form = document.querySelector('#form')
  const username = document.querySelector('#username')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const cPassword = document.querySelector('#cPassword')

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([username, email, password, cPassword])
    if (password.value.length < 8) {
      showError(password, 'Password must be at least 8 characters')
    }
    if (password?.value !== cPassword?.value) {
      showError(cPassword, 'Passwords do not match')
    }
  })

  function checkRequired(inputArr) {
    for (const e of inputArr) {
      if (!e.value) {
        showError(e, `${e.name} is required`)
      } else {
        showSuccess(e)
      }
    }
  }
  function showError(e, msg) {
    e?.classList.add('error')
    const small = e?.parentElement?.querySelector('small')
    small?.classList.add('error')
    small.innerText = msg
  }
  function showSuccess(e) {
    e?.classList.remove('error')
    e?.classList.add('success')
    const small = e?.parentElement?.querySelector('small')
    small?.classList.remove('error')
  }
})
</script>

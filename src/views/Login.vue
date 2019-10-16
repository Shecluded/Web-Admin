<template>
  <div class="login text-center d-flex flex-column">
    <form class="form-signin">
      <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt width="72" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control mb-3"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control mb-3"
        placeholder="Password"
        required
      />

      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style scoped>
.form-signin {
  width: 30vw;
  margin: auto;
}
.login {
  height: 100vh;
  width: 100vw;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");

body {
  margin: 0;
  padding: 0;
  background: #e5e5e5;
  font-family: "Roboto", sans-serif;
}
a {
  font-weight: bold;
  color: #2c3e50;
  fill: white;
}

.router-link-exact-active {
  color: #42b983;
  background: #e5e5e5;
}
.router-link-exact-active .logo {
  background: #fc559b !important;
}
.router-link-exact-active .note {
  background: #fc559b !important;
}
button {
  outline: none;
  box-shadow: none;
}
button:focus {
  outline: none;
}
</style>

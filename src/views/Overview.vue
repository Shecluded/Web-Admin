<template>
  <div>
    <header class="header d-flex align-items-center justify-content-center shadow-sm">
      <h1 class="text-center">SHECLUDED</h1>
      <div class="btn-cont">
        <button class="logout-btn">Log Out</button>
      </div>
    </header>
    <div class="d-flex">
      <div class="side-bar">
        <div class="d-flex flex-column">
          <router-link class="mt-5" to="/dashboard">
            <div class="logo"></div>
            <!-- <img src="@/assets/vector.svg" alt /> d -->
          </router-link>

          <router-link to="/dashboard/loan">
            <div class="note"></div>
            <!-- <img src="@/assets/vector.svg" alt /> d -->
          </router-link>
        </div>
      </div>
      <div class="main-area fix-m">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 8vh;
  background: white;
  color: #f740ac;
  font-size: 12px;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 100;
  text-align: center;
}
.header h1 {
  font-size: 26px;
  font-style: italic;
  font-weight: bold;
}
.btn-cont {
  position: absolute;
  right: 0;
}
.logout-btn {
  height: 8vh;
  background: #808080;
  width: 8vw;
  color: white;
  border: none;
  font-size: 14px;
}
.side-bar {
  top: 8vh;
  position: sticky;
  height: 92vh;
  width: 8vw;
  background: #fc559b;
}
.main-area {
  flex: 1;
}
.logo {
  width: 100px;
  height: 100px;
  mask: url("/vector.svg") no-repeat center;
  background: white;
}
.note {
  width: 100px;
  height: 100px;
  mask: url("/note.svg") no-repeat center;
  background: white;
}
.fix-m {
  margin: 0 6vw;
}
</style>
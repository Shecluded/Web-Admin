<template>
  <div>
    <h4 class="mt-5">DASHBOARD</h4>
    <h6 class="text-muted mt-4">OVERVIEW</h6>
    <div class="grid mt-4">
      <div class="card shadow-sm p-3 pr-5">
        <h5 class="text-muted font-weight-light">AMOUNT DISBURSED</h5>
        <div class="d-flex justify-content-between align-items-center">
          <h1>50M</h1>
          <img class="mb-4" src="@/assets/money.svg" alt />
        </div>
      </div>
      <div class="card shadow-sm p-3 pr-5">
        <h5 class="text-muted font-weight-light">NEW LOAN REQUEST</h5>
        <div class="d-flex justify-content-between align-items-center">
          <h1>34</h1>
          <img class="mb-4" src="@/assets/holdmoney.svg" alt />
        </div>
      </div>
      <div class="card shadow-sm p-3 pr-5">
        <h5 class="text-muted font-weight-light">LOAN REQUESTS</h5>
        <div class="d-flex justify-content-between align-items-center">
          <h1>09</h1>
          <img class="mb-4" src="@/assets/moneybag.svg" alt />
        </div>
      </div>
    </div>
    <div class="card shadow-sm mt-3 mb-4">
      <h5 class="text-muted font-weight-light pl-3 pt-3 pb-1">NEW LOAN REQUESTS</h5>
      <div
        v-for="i in 4"
        :key="i"
        class="border-top p-3 d-flex align-items-center justify-content-between"
      >
        <div class="image-area d-flex align-items-center">
          <img
            class="rounded-circle"
            height="60px"
            width="60px"
            src="https://images.pexels.com/photos/1124724/pexels-photo-1124724.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt
          />
          <div class="d-flex flex-column">
            <h5 class="pl-3 mb-0">Bisola Adams</h5>
            <h6 class="pl-3 small">Business Owner</h6>
          </div>
        </div>
        <div class="d-flex flex-column text-center">
          <h6 class="pl-3 small mb-0">Amount Requested For</h6>
          <h5 class="pl-3 mb-0 mt-0">N500,000</h5>
        </div>
        <div class="d-flex flex-column text-center">
          <h6 class="pl-3 small mb-0">Request Date</h6>
          <h5 class="pl-3 mb-0 mt-0">26/09/2019</h5>
        </div>
        <div>
          <button class="btn btn-pink p-2 mr-4">View</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
}
.image-area img {
  object-fit: cover;
}
.small {
  font-size: 12px;
}
.btn-pink {
  width: 15vw;
  background: #fc559b;
  border-radius: 4px;
  color: white;
}
</style>
<template>
  <div class="loan">
    <h4 class="mt-5">Loan Request</h4>
    <div class="d-flex justify-content-end bm pb-2">
      <div class="d-flex align-items-center pr-4">
        <img height="20vh" width="20vw" src="@/assets/sort.svg" alt />
        <span class="pl-1 text-muted">Sort</span>
      </div>
      <div class="d-flex align-items-center">
        <img height="20vh" width="20vw" src="@/assets/funnel.svg" alt />
        <span class="pl-1 text-muted">Filter</span>
      </div>
    </div>
    <div
      v-for="i in 5"
      :key="i"
      class="sm mx-5 p-3 d-flex align-items-center justify-content-between"
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
</template>

<script scoped>
export default {};
</script>

<style>
.bm {
  border-bottom: 1px solid rgba(0, 0, 0, 0.123);
  position: relative;
}
.sm {
  position: relative;
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
.btn-pink:hover {
  color: white;
}

.sm::after {
  content: "";
  position: absolute;
  border-bottom: 1px solid rgba(0, 0, 0, 0.123);
  width: 90%;
  bottom: 0;
  right: 3vw;
}
.loan img {
  object-fit: cover;
}
</style>
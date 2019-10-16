<template>
  <div>
    <div class="d-flex mt-5">
      <img src="@/assets/backarrow.svg" @click="$router.go(-1)" alt class="click" />
      <h4 class="mb-0 pl-3 dim">Loan Approval</h4>
    </div>
    <div class="grid-1 mt-5">
      <div class="card profile-area shadow-sm">
        <h5 class="text-muted profile-text font-weight-light mx-3 py-3">Profile</h5>
        <div class="d-flex align-items-center mx-3 mt-3">
          <img
            class="rounded-circle"
            height="100px"
            width="100px"
            src="https://images.pexels.com/photos/1124724/pexels-photo-1124724.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt
          />
          <div class="d-flex flex-column">
            <h5 class="pl-3 mb-0">Bisola Adams</h5>
            <h6
              class="pl-3 pt-1 small text-muted"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas accusamus aliquid at</h6>
          </div>
        </div>
        <h6 class="pl-3 pt-5 mb-0 font-weight-light">Source of Income</h6>
        <div class="over mt-2">
          <div>
            <div class="top">
              <h6 class="pl-3 mb-0 text-muted font-weight-bold">Rennas House of Fashion</h6>
              <h6
                class="pl-3 pt-1 small text-muted mb-1"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
              <h6 class="pl-3 pt-1 small text-muted mb-0">+2348178902920</h6>
              <h6 class="pl-3 pt-1 small text-underline text-muted">
                <u>www.rennasfahion.com.ng</u>
              </h6>
              <div class="grid-two mt-4">
                <div class="d-flex flex-column">
                  <h5 class="pl-3 small text-muted">Monthly Profit</h5>
                  <h4 class="pl-3">N150,000</h4>
                </div>
                <div class="d-flex flex-column">
                  <h5 class="pl-3 small text-muted">No. of Employees</h5>
                  <h4 class="pl-3">16</h4>
                </div>
                <div class="d-flex align-items-center mt-3">
                  <img class="ml-3" src="@/assets/doc.svg" alt />
                  <h6 class="pl-1 small text-muted">CAC Documents</h6>
                </div>
                <div class="d-flex align-items-center mt-3">
                  <img class="ml-3" src="@/assets/doc.svg" alt />
                  <h6 class="pl-1 small text-muted">Bank Statements</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card shadow-sm">Loan Details</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid-1 {
  display: grid;
  grid-template-columns: 2.7fr 5fr;
  grid-gap: 20px;
}
.grid-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.profile-text {
  border-bottom: 1px solid rgba(0, 0, 0, 0.123);
}
.profile-area img {
  object-fit: cover;
}
.over {
  height: 40vh;
  overflow-x: scroll;
}
.top {
  width: 80%;
}
</style>
<template>
  <section class="section">
    <div class="row align-items-top">
      <div class="col-lg-2">
        <div class="card mb-3 h-100 back-gray p-5">
          <div class="d-flex py-4 mb-5">
            <a href="index.html" class="logo d-flex align-items-center w-auto">
              <img src="/src/assets/img/logo.png" alt="" />
            </a>
          </div>
          <h6>Lorem ipsum dolor sit amet,</h6>
          <div class="col-12 mt-4">
            <div class="line-with-text">
              <div class="line"></div>
            </div>
          </div>

          <div class="d-grid gap-2 mt-3">
            <button
              class="btn btn-primary"
              @click="navigateInsert()"
              type="button"
            >
              + Add Items
            </button>
          </div>

          <div class="float-left mt-5">
            <div class="credits text-white">
              <p class="text-white">Compte: Achi@gmail.com et le mtps: test.</p>
              John Doe
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <todoList></todoList>
      </div>

      <div class="col-lg-3">
        <section class="section dashboard">
          <div class="card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"
                ><i class="bi bi-three-dots"></i
              ></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body pb-0">
              <h5 class="card-title">
                News &amp; Updates <span>| Today</span>
              </h5>

              <div class="news">
                <div class="post-item clearfix">
                  <img src="/src/assets/img/news-1.jpg" alt="" />
                  <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                  <p>
                    Sit recusandae non aspernatur laboriosam. Quia enim eligendi
                    sed ut harum...
                  </p>
                </div>

                <div class="post-item clearfix">
                  <img src="/src/assets/img/news-2.jpg" alt="" />
                  <h4><a href="#">Quidem autem et impedit</a></h4>
                  <p>
                    Illo nemo neque maiores vitae officiis cum eum turos elan
                    dries werona nande...
                  </p>
                </div>

                <div class="post-item clearfix">
                  <img src="/src/assets/img/news-3.jpg" alt="" />
                  <h4>
                    <a href="#"
                      >Id quia et et ut maxime similique occaecati ut</a
                    >
                  </h4>
                  <p>
                    Fugiat voluptas vero eaque accusantium eos. Consequuntur sed
                    ipsam et totam...
                  </p>
                </div>

                <div class="post-item clearfix">
                  <img src="/src/assets/img/news-4.jpg" alt="" />
                  <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                  <p>
                    Qui enim quia optio. Eligendi aut asperiores enim
                    repellendusvel rerum cuder...
                  </p>
                </div>

                <div class="post-item clearfix">
                  <img src="/src/assets/img/news-5.jpg" alt="" />
                  <h4>
                    <a href="#">Et dolores corrupti quae illo quod dolor</a>
                  </h4>
                  <p>
                    Odit ut eveniet modi reiciendis. Atque cupiditate libero
                    beatae dignissimos eius...
                  </p>
                </div>
              </div>
              <!-- End sidebar recent posts-->
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import todoList from "../components/todolist.vue";
import router from "@/router";

function navigateInsert() {
  router.push("/insert");
}
</script>

<style>
.line-with-text {
  display: flex;
  align-items: center;
  text-align: center;
}
.line {
  flex-grow: 1;
  border-bottom: 1px solid black;
}
.back-gray {
  background-color: #b5b9c4;
}

.blue-pr {
  color: rgb(14, 168, 220);
}

.br-pr {
  background-color: rgb(14, 168, 220);
}

.br-pr:hover,
.br-pr:focus {
  background-color: rgb(14, 168, 220);
}

.custom-list {
  list-style-type: none;
  padding-left: 0;
}
</style>

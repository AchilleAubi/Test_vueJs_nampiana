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
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <ul class="custom-list">
                <li><b>Aujourd'hui</b></li>
                <li class="blue-pr"><b>21 Mai 2024</b></li>
              </ul>
            </div>
            <div class="col-md-2 text-end">
              <button class="btn br-pr">+ Creer</button>
            </div>
          </div>
          <div class="mb-3">
            <input
              type="text"
              v-model="searchTerm"
              placeholder="Rechercher"
              class="form-control"
            />
          </div>
          <div class="card">
            <div
              v-for="company in filteredAndPaginatedCompanies.data"
              :key="company['task']"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-md-1 text-center">
                    <input type="checkbox" />
                  </div>
                  <div class="col-md-10">
                    <h5 class="card-title">{{ company["task"] }}</h5>
                    <span><input type="radio" /></span>
                    <span class="text-muted small pt-1 fw-bold"
                      ><b> Devs - </b></span
                    >
                    <span class="text-info small pt-2 ps-1">{{
                      company["date"]
                    }}</span>
                  </div>
                  <div class="col-md-1 text-center">
                    <i
                      v-if="company['important']"
                      class="bi bi-diamond-fill"
                    ></i>
                    <i v-if="!company['important']" class="bi bi-diamond"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click="prevPage">Precedent</a>
              </li>
              <li
                v-for="n in filteredAndPaginatedCompanies.totalPages"
                :key="n"
                class="page-item"
              >
                <a
                  class="page-link"
                  :class="{ active: currentPage === n }"
                  @click="setPage(n)"
                >
                  {{ n }}
                </a>
              </li>
              <li
                class="page-item"
                :class="{
                  disabled:
                    currentPage === filteredAndPaginatedCompanies.totalPages,
                }"
              >
                <a class="page-link" href="#" @click="nextPage">Suivant</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="col-lg-3">
        <section class="section dashboard">
          <div class="card">
            <div class="card-body pb-0">
              <h5 class="card-title">
                <a
                  class="nav-link nav-profile d-flex align-items-center pe-0"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="../assets/img/profile-img.jpg"
                    alt="Profile"
                    class="rounded-circle"
                  />
                  <p class="profile-name d-none d-md-block ps-2">John Die</p>
                  <p class="profile-email">johndie@gmail.com</p>
                </a>
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
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import router from "@/router";

const companies = ref<any[]>([]);
const searchTerm = ref("");
const currentPage = ref(1);
const itemsPerPage = 8;

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://retoolapi.dev/9lwmoL/to-do-edisys"
    );
    companies.value = response.data;
    console.log(companies.value, "response.data");
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
});

const filteredAndPaginatedCompanies = computed<{
  totalPages: number;
  data: any[];
}>(() => {
  const filtered = companies.value.filter(
    (company) =>
      company["task"] &&
      company["task"].toLowerCase().includes(searchTerm.value.toLowerCase())
  );

  if (filtered.length === 0) {
    return {
      totalPages: 0,
      data: [],
    };
  }

  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const data = filtered.slice(startIndex, endIndex);
  return {
    totalPages,
    data,
  };
});

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < filteredAndPaginatedCompanies.value.totalPages) {
    currentPage.value++;
  }
}

function setPage(pageNumber: number) {
  currentPage.value = pageNumber;
}

function handleSubmit(id: any) {
  router.push(`/details/${id}`);
}

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

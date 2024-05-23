<template>
  <section class="section">
    <div class="row align-items-top">
      <div class="col-lg-3">
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

      <div class="col-lg-6">
        <div class="pagetitle">
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/home">Home</a></li>
              <li class="breadcrumb-item">List</li>
              <li class="breadcrumb-item active">Compagnies</li>
            </ol>
          </nav>
        </div>
        <!-- End Page Title -->

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Détails</h5>

                <!-- General Form Elements -->
                <form @submit.prevent>
                  <div class="row justify-content-center">
                    <div class="col-xl-8">
                      <div class="">
                        <div
                          class="pt-4 pb-4 d-flex flex-column align-items-center"
                        >
                          <img
                            :src="companiesDetail.Logo"
                            alt="Profile"
                            class="rounded-circle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputText" class="col-sm-2 col-form-label"
                      >Company Name</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        :value="companiesDetail['Company Name']"
                        @input="updateCompanyName($event.target.value)"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputNumber" class="col-sm-2 col-form-label"
                      >Vue</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="number"
                        class="form-control"
                        :value="companiesDetail['vue']"
                        @input="updateVue($event.target.value)"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label"
                      >About</label
                    >
                    <div class="col-sm-10">
                      <textarea
                        class="form-control"
                        v-model="companiesDetail.About"
                        style="height: 100px"
                      ></textarea>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-3">
                      <button class="btn btn-info" @click="navigeHome()">
                        Retour
                      </button>
                    </div>
                    <div class="col-sm-3">
                      <button
                        class="btn btn-danger"
                        @click="deleteCompanie(companiesDetail.id)"
                      >
                        Supprimer
                      </button>
                    </div>
                    <div class="col-sm-4">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        @click="updateCompanie(companiesDetail.id)"
                      >
                        Modifier
                      </button>
                    </div>
                  </div>
                </form>
                <!-- End General Form Elements -->
              </div>
            </div>
          </div>
        </div>
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
import axios from "axios";
import router from "@/router";

import { defineProps, ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const companiesDetail = ref<any>({
  id: "",
  vue: 0,
  Logo: "",
  About: "",
  "Company Name": "",
});
const routers = useRouter();

onMounted(async () => {
  try {
    const currentPath = routers.currentRoute.value.path;
    const id = currentPath.split("/").pop();

    const response = await axios.get(
      `https://api-generator.retool.com/Oal4aL/listing-company/${id}`
    );
    companiesDetail.value = response.data;
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
});

const updateCompanyName = (value: string) => {
  companiesDetail.value["Company Name"] = value;
};

const deleteCompanie = async (id: number) => {
  try {
    await axios.delete(
      `https://api-generator.retool.com/Oal4aL/listing-company/${id}`
    );
    router.push(`/home`);
  } catch {}
};

const updateCompanie = async (id: number) => {
  try {
    await axios.put(
      `https://api-generator.retool.com/Oal4aL/listing-company/${id}`,
      companiesDetail.value
    );
    window.location.reload();
  } catch (error) {}
};

const navigeHome = () => {
  router.push(`/home`);
};

const updateVue = (value: number) => {
  companiesDetail.value["id"] = value;
};

function navigateInsert() {
  router.push("/insert");
}
</script>

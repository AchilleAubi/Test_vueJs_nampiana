<template>
  <section class="section">
    <div class="row align-items-top">
      <div class="col-lg-3"></div>

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

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >Url logo</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      :value="companiesDetail['Logo']"
                      @input="updateLogo($event.target.value)"
                    />
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
                    <button class="btn btn-primary" @click="insertComp()">
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
              <!-- End General Form Elements -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
import router from "@/router";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const companiesDetail = ref<any>({
  id: "",
  vue: 0,
  Logo: "",
  About: "",
  "Company Name": "",
});

onMounted(async () => {});

const updateCompanyName = (value: string) => {
  companiesDetail.value["Company Name"] = value;
};

const insertComp = async () => {
  try {
    await axios.post(
      `https://api-generator.retool.com/Oal4aL/listing-company`,
      companiesDetail.value
    );
    router.push(`/home`);
  } catch {}
};

const updateLogo = (value: string) => {
  companiesDetail.value["Logo"] = value;
};

const navigeHome = () => {
  router.push(`/home`);
};

const updateVue = (value: number) => {
  companiesDetail.value["id"] = value;
};
</script>

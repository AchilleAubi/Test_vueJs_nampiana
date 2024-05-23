<template>
    <section class="section">
      <div class="row align-items-top">
        <div class="col-lg-3">
        </div>

        <div class="col-lg-6">
          <div class="pagetitle">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item">Components</li>
                <li class="breadcrumb-item active">Cards</li>
              </ol>
            </nav>
          </div><!-- End Page Title -->
          <section class="section dashboard">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card with header and footer</h5>
                Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas.
              </div>
              <div class="card-footer">
                Footer
              </div>
            </div>
            <div class="col-xxl-4 col-xl-12">
  
              <div class="card info-card customers-card">
  
                <div class="card-body">
  
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>1244</h6>
                      <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>
  
                    </div>
                  </div>
  
                </div>
              </div>
  
            </div>
          </section>
        </div>

        <div class="col-lg-3">

          
          <!-- Special title treatmen -->
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div><!-- End Special title treatmen -->

        </div>

      </div>
    </section>
</template>

<script setup lang="ts">
import axios from 'axios';
import { defineProps, ref, onMounted } from 'vue';

const companies = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://retoolapi.dev/Oal4aL/listing-company');
    companies.value = response.data;
    console.log('response.data',response.data);
    
  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
  }
});
</script>

<style scoped>
</style>

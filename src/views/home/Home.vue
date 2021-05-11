<template>
  <div class="home-page">
    <Carousel />

    <b-container>
      <b-row>
        <div
          class="products col-sm-6 col-md-4"
          v-for="product in products"
          :key="product._id"
        >
          <ProductItem :product="product" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script src='./Home.js'></script>

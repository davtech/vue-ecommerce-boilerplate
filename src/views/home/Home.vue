<template>
  <div class="home-page">
    <Carousel />

    <b-container>
      <b-row>
        <b-col
          sm="6"
          md="4"
          v-for="product in products"
          :key="product._id"
        >
          <ProductItem :product="product" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src='./Home.js'></script>

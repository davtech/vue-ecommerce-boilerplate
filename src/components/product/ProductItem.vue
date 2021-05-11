<template>
  <b-card
    img-top
    img-lazy
    :title="product.name"
    :img-src="product.image.lg"
    :img-alt="product.name"
    class="produtc-card mb-2"
  >
    <b-card-text class="opacity-50">
      {{product.description}}
    </b-card-text>

    <div class="d-flex justify-content-between">
      <strong class="pt-2">
        R$ {{product.price}}
      </strong>
      <b-button class="ml-auto" href="#" variant="primary">Comprar</b-button>
    </div>

  </b-card>
</template>

<script src="./ProductItem.js"></script>

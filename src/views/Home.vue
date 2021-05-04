<template>
  <div class="home">
    <b-container>

      <b-row>
        <b-col
          class="mb-3"
          sm="6"
          md="3"
          v-for="product in products"
          :key="product._id"
        >
          <!-- TODO: Carregar imagem correta de acordo com o tamanho da tela -->
          <b-card
            img-top
            img-lazy
            :title="product.name"
            :img-src="product.image.lg"
            :img-alt="product.name"
            class="mb-2"
          >
            <b-card-text>
              {{product.description}}
            </b-card-text>

            <div class="d-flex justify-content-between">
              <strong class="pt-2">
                R$ {{product.price}}
              </strong>
              <b-button class="ml-auto" href="#" variant="primary">Comprar</b-button>
            </div>

          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import ProductService from '@/services/productsService'

export default {
  name: 'Home',
  data: function () {
    return {
      products: []
    }
  },
  async mounted () {
    try {
      const products = await ProductService.fetchProducts()
      this.products = products
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body h4{
  font-size: 1.2rem !important;
  font-weight: 600;
}
p.card-text {
  opacity: 0.6;
}
</style>

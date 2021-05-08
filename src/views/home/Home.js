import ProductService from '@/services/productsService'
import ProductItem from '@/components/product/ProductItem.vue'
import Carousel from '@/components/carousel/Carousel.vue'

export default {
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
  },

  components: {
    ProductItem,
    Carousel
  }
}

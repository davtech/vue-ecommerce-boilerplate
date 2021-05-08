import Http from './http'

export default {

  async fetchProducts () {
    const url = 'products'

    try {
      const { data } = await Http.get(url)
      return data
    } catch (error) {
      console.error(error)
    }
  },

  async fetchProductsPagination (config) {
    const url = `/products?page=${config.page}&limit=${config.limit}`

    try {
      const { data } = await Http.get(url)
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

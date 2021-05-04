import Http from './http'

export default {

  async fetchProducts (config) {
    const url = (config) ? `/products?page=${config.page}&limit=${config.limit}` : 'products'

    try {
      const { data } = await Http.get(url)
      return data
    } catch (error) {
      console.error(error)
    }
  }

}

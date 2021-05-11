import Vue from 'vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import ProductService from '@/services/productsService'
import Home from '@/views/home/Home.vue'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

jest.mock('@/services/productsService')

const produtos = [
  {
    description: 'Small Frozen Shirt',
    image: {
      lg: 'https://via.placeholder.com/700'
    },
    name: 'Tasty Concrete Shoes',
    price: '435.00',
    _id: '00JRqCJLnSLeei7O'
  },
  {
    description: 'Handcrafted Fresh Shirt',
    image: {
      lg: 'https://via.placeholder.com/700'
    },
    name: 'Intelligent Cotton Pizza',
    price: '324.00',
    _id: '00buuyuhKq64KyDN'
  }
]

describe('home page', () => {
  it('should render', () => {
    const home = mount(Home)
    expect(home.exists()).toBeTruthy()
  })

  it('should list the columns', async () => {
    ProductService.fetchProducts.mockResolvedValueOnce(produtos)
    const home = mount(Home)

    await flushPromises()
    const columns = home.findAll('.products')
    expect(columns).toHaveLength(home.vm.products.length)
  })
})

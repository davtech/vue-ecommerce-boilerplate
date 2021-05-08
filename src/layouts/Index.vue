<template>
  <div id="app">
    <AppHeader/>
    <main>
      <router-view/>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './header/Header.vue'
import AppFooter from './footer/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

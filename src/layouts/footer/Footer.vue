<template>
  <footer class="mt-3 mb-3">
    <b-container class="text-center">
      Ecommerce rump up Vue ©  {{ currentYear }}
    </b-container>
  </footer>
</template>
<script>

export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

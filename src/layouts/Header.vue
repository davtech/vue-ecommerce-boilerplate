<template>
  <header class="mb-3">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Ecommerce</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <!-- lang component -->
          <b-nav-item-dropdown text="Idioma" right>
            <b-dropdown-item href="#">PT-BR</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/login">Entrar</b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Nome do usuário</em>
            </template>
            <b-dropdown-item href="#">Meus pedidos</b-dropdown-item>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/cart"> 0 produtos</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>

export default {}

</script>

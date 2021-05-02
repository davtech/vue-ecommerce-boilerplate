<template>
  <div class="home">
    <b-container>
      <h1>Produtos</h1>

      <b-row>
        <b-col>
          <div>
            <b-card
              title="Título do produto"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text  text-tag="small">
                Descrição do produto
              </b-card-text>
              <b-card-text>
                <strong>Valor: R$ 50,00</strong>
              </b-card-text>

              <b-button href="#" variant="primary">Adicionar ao carrinho de compras</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

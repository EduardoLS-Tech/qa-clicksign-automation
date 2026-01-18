# language: pt
@e2e
Funcionalidade: Checkout

  @regressao
  Cenário: Finalizar compra com sucesso
    Dado que estou logado como "standard"
    Quando eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    E eu finalizo o checkout com os dados:
      | firstName | lastName | zip   |
      | Edu       | QA       | 90000 |
    Então devo ver a confirmação de compra

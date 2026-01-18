import { productsEl } from "../elements/products.elements";

export class ProductsPage {
  validarPaginaProdutos() {
    cy.get(productsEl.title).should("contain", "Products");
  }

  adicionarProdutoPorNome(nome) {
    cy.contains(productsEl.itemName, nome)
      .parents(productsEl.item)
      .within(() => {
        cy.contains("Add to cart").click();
      });
  }

  abrirCarrinho() {
    cy.get(productsEl.cartLink).click();
  }
}

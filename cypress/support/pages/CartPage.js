import { cartEl } from "../elements/cart.elements";

export class CartPage {
  validarProdutoNoCarrinho(nome) {
    cy.get(cartEl.itemName).should("contain", nome);
  }

  irParaCheckout() {
    cy.get(cartEl.checkoutBtn).click();
  }
}

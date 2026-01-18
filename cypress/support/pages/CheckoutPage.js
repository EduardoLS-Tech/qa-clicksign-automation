import { checkoutEl } from "../elements/checkout.elements";

export class CheckoutPage {
  preencherDados(firstName, lastName, zip) {
    cy.get(checkoutEl.firstName).clear().type(firstName);
    cy.get(checkoutEl.lastName).clear().type(lastName);
    cy.get(checkoutEl.postalCode).clear().type(zip);
  }

  continuar() {
    cy.get(checkoutEl.continueBtn).click();
  }

  finalizar() {
    cy.get(checkoutEl.finishBtn).click();
  }

  validarCompraFinalizada() {
    cy.get(checkoutEl.completeHeader).should("contain", "Thank you for your order");
  }
}

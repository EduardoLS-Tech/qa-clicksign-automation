import { menuEl } from "../elements/menu.elements";

export class MenuComponent {
  abrirMenu() {
    cy.get(menuEl.burgerBtn).click();
  }

  logout() {
    cy.get(menuEl.logoutLink).click();
  }
}
